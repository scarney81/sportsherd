/*globals App*/
(function(app, backbone) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  views.Base = backbone.View.extend({

    initialize: function() { this.views = []; },

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    },

    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      var sendEvent = function(action, data) { return function() { console.log(action);sc.sendEvent(action, data); }; };
      for (var key in events) {
        if (events.hasOwnProperty(key)) {
          var viewHasMethod = !!this[events[key]];
          var match = key.match(delegateEventSplitter);
          var eventName = match[1], selector = match[2];
          eventName += '.delegateEvents' + this.cid;

          var method = events[key];
          var func = null;
          if (viewHasMethod) {
            if (!_.isFunction(method)) method = this[events[key]];
            if (!method) continue;
            func = _.bind(method, this);
          } else {
            if (_.isObject(method) && method.hasOwnProperty('event')) {
              var data = null;
              if  (method.hasOwnProperty('data')) data = _.isFunction(method['data']) ? method['data']() : method['data'];

              method = method['event'];
              func = sendEvent(method, data);
            } else func = sendEvent(method);
          }

          if (selector === '') this.$el.on(eventName, func);
          else {
            // this.$el.on(eventName, selector, method);
            // apply directly to element instead of parent (this prevents flicker in iOS)
            this.$el.find(selector).on(eventName, func);
          }
        }
      }
      return this;
    },

    undelegateEvents: function(events) {
      // this.$el.off('.delegateEvents'+this.cid);
      // re-write undelegateEvents to turn off events on specific elements
      if (!(events || (events = _.result(this, 'events')))) return this;
      for (var key in events) {
        if (events.hasOwnProperty(key)) {
          var match = key.match(delegateEventSplitter);
          var eventName = match[1], selector = match[2];
          eventName += '.delegateEvents'+this.cid;
          if (selector === '') this.$el.off(eventName);
          else this.$el.find(selector).off(eventName);
        }
      }
      return this;
    },

    sendEvent: function(event) {
      sc.sendEvent(event);
      return this;
    },

    close: function() {
      this.remove();
      this.unbind();
      this.undelegateEvents();

      if (this.views && this.views.length) {
        this.views.forEach(function(view) {
          if (view.close) view.close();
        });
      }

      return this;
    }

  });

})(App, Backbone);