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
      for (var key in events) {
        if (events.hasOwnProperty(key)) {
          var method = events[key];
          var viewHasMethod = !!this[events[key]];

          var match = key.match(delegateEventSplitter);
          var eventName = match[1], selector = match[2];
          eventName += '.delegateEvents' + this.cid;
          if (selector === '') this.$el.on(eventName, method);
          else {
            // this.$el.on(eventName, selector, method);
            // apply directly to element instead of parent (this prevents flicker in iOS)
            var func = function() { sc.sendEvent(method); };
            if (viewHasMethod) {
              if (!_.isFunction(method)) method = this[events[key]];
              if (!method) continue;
              func = _.bind(method, this);
            }
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