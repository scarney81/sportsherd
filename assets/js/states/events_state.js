/*globals App*/
(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  var data = app.Data;

  sc.addState('events', {

    parentState: 'application',

    enterState: function() {
      var events = data.Events;

      this.view = new views.Events({ collection: events });
      $('.content').html(this.view.render().el);

      var state = events.length ? 'events-ready' : 'events-loading';
      this.goToState(state);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('events-loading', {
    
    parentState: 'events',

    enterState: function() {
      this.sendEvent('busy');

      var self = this;
      data.Events.fetch({ success: function() { self.goToState('events-ready'); }});
    },

    exitState: function() {
      this.sendEvent('idle');
    }

  });

  sc.addState('events-ready', {
    
    parentState: 'events'

  });

})(App);