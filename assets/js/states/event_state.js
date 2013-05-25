/*globals App*/
(function(app) {
  "use strict";

  var data = app.Data;
  var helpers = app.Helpers;
  var sc = app.Statechart;
  var models = app.Models;
  var views = app.Views;

  sc.addState('event', {

    parentState: 'application',

    enterState: function() {
      var self = this;
      var id = this.getData('id');

      var event = data.Events.get(id);
      var nextEvent = !!event ? 'show' : 'fetch';
      
      if (helpers.isNull(event)) event = new models.Event({ id: id });

      this.model = event;
      this.view = new views.Team({ model: event });
      this.sendEvent(nextEvent);
    },

    exitState: function() {
      if (this.view) this.view.close();
    },

    fetch: function() {
      var that = this;

      this.model.fetch({ sucess: function(event) {
        data.Events.push(event);
        that.model = event;
        that.sendEvent('show');
      }});
    },

    show: function() {
      $('.content').html(this.view.render().el);
    }

  });

})(App);