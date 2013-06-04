/*globals App*/
// #= require '../controllers/events_controller'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  var eventsController = app.Controllers.Events;

  sc.addState('events', {

    parentState: 'application',

    enterState: function() {
      var events = eventsController.events;
      var fetched = eventsController.fetchedEvents;

      this.view = new views.Events({ collection: events });
      $('.content').html(this.view.render().el);

      var state = fetched ? 'events-ready' : 'events-loading';
      this.goToState(state);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('events-loading', {
    
    parentState: 'events',

    enterState: function() {
      var that = this;

      this.sendEvent('busy');
      eventsController.events.fetch({ success: function() { that.goToState('events-ready'); }});
    },

    exitState: function() {
      this.sendEvent('idle');
    }

  });

  sc.addState('events-ready', {
    
    parentState: 'events'

  });

})(App);