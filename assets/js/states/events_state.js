/*globals App, $*/
// #= require '../controllers/events_controller'
// #= require ../controllers/navigation_controller

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  var eventsController = app.Controllers.Events;
  var navigationController = app.Controllers.Navigation;

  sc.addState('events', {

    parentState: 'application',

    enterState: function() {     
      navigationController.selectItem('Events');
      
      var events = eventsController.events;
      var fetched = eventsController.fetchedEvents;

      this.view = new views.Events({ collection: events });
      $('.content').html(this.view.render().el);

      var state = fetched ? 'events-ready' : 'events-loading';
      this.goToState(state);
    },

    exitState: function() {
      navigationController.deselectItem('Events');
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
    
    parentState: 'events',

    showEvent: function(id) {
      app.Router.navigate('/events/'+id, { trigger: true });
    }

  });

  sc.addState('event', {

    parentState: 'application',

    enterState: function() {
      navigationController.selectItem('Events');
      
      var evt = eventsController.getEvent(this.getData('id'));
      var fetched = evt.get('fetched') || false;

      this.view = new views.EventProfile({ model: evt });
      $('.content').html(this.view.render().el);

      var state = fetched ? 'event-ready' : 'event-loading';
      this.goToState(state);
    },

    exitState: function() {
      this.removeData('event');
      navigationController.deselectItem('Events');
    }

  });

  sc.addState('event-loading', {

    parentState: 'event',

    enterState: function() {
      var that = this;

      this.sendEvent('busy');
      eventsController.fetchEvent(function() { that.goToState('event-ready'); });
    },

    exitState: function() {
      this.sendEvent('idle');
    }

  });

  sc.addState('event-ready', {

    parentState: 'event'
    
  });

})(App);