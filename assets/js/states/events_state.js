/*globals App*/
(function(app) {
  "use strict";

  var sc = app.statechart;
  var views = app.Views;
  var data = app.Data;

  sc.addState('events', {

    parentState: 'application',

    initialSubstate: 'events-loading',

    enterState: function() {
      var events = data.Events;
      var view = new views.EventsView({ collection: events });

      $('.content').html(view.render().el);
      this.setData('view', view);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('events-loading', {
    
    parentState: 'events',

    enterState: function() { // TODO: Show loading animation
      this.sendEvent('loadEvents');
    },

    exitState: function() { // TODO: Hide loading animation
    },

    loadEvents: function() {
      var self = this;
      var events = data.Events;
      if (events) {
        if (events.length) this.goToState('events-ready');
        else events.fetch({ success: function() { self.goToState('events-ready'); }});
      }
    }

  });

  sc.addState('events-ready', {
    
    parentState: 'events',
    
    enterState: function() {}

  });

})(App);