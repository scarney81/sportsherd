/*globals App*/
(function(app, backbone) {

  var sc = app.Statechart;
  var switch_state = function(state) { sc.sendEvent('switchState', state); };

  app.Router = backbone.Router.extend({
    routes: {

      'events': 'events',

      'profile': 'profile',
      
      'teams': 'teams',
      
      '*route': 'dashboard'

    },

    events: function() {
      switch_state('events');
    },

    profile: function() {
      switch_state('profile');
    },

    teams: function() {
      switch_state('teams');
    },

    dashboard: function() {
      switch_state('dashboard');
    }

  });

})(App, Backbone);