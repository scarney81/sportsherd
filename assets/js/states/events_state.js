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
    },

    exitState: function() {
      navigationController.deselectItem('Events');
    }

  });

  sc.addState('events-list', {

    parentState: 'events',

    enterState: function() {
      var fetched = eventsController.fetchedEvents;

      var state = fetched ? 'events-list-ready' : 'events-list-loading';
      this.goToState(state);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('events-list-loading', {

    parentState: 'events-list',

    enterState: function() {
      var that = this;
      eventsController.events.fetch({ success: function() { that.goToState('events-list-ready'); }});
    }

  });

  sc.addState('events-list-ready', {

    parentState: 'events-list',

    enterState: function() {
      var state = eventsController.events.length ? 'events-list-hasEvents' : 'events-list-noEvents';
      this.goToState(state);
    },

    states: [
      {
        name: 'events-list-hasEvents',

        enterState: function() {
          var events = eventsController.events;
          this.view = new views.Events({ collection: events });
          $('.content').html(this.view.render().el);
        },
        exitState: function() {
          if (this.view) this.view.close();
        }
      },
      {
        name: 'events-list-noEvents',

        enterState: function() {
          // this.view = new view.NoEvents();
          // $('.content').html(this.view.render().el);
        },

        exitState: function() {
          if (this.view) this.view.close();
        }

      }
    ]

  });

  sc.addState('event', {

    parentState: 'events',

    enterState: function() {
      var evt = eventsController.getEvent(this.getData('id'));
      var fetched = evt.get('fetched') || false;

      this.view = new views.EventProfile({ model: evt });
      $('.content').html(this.view.render().el);

      var state = fetched ? 'event-ready' : 'event-loading';
      this.goToState(state);
    },

    exitState: function() {
      this.removeData('event');
    }

  });

  sc.addState('event-loading', {

    parentState: 'event',

    enterState: function() {
      var that = this;
      eventsController.fetchEvent(function() { that.goToState('event-ready'); });
    }

  });

  sc.addState('event-ready', {

    parentState: 'event'

  });

})(App);