/*globals App*/
(function(app, backbone) {

  var sc = app.Statechart;
  var switch_state = function(state) { sc.sendEvent('switchState', state); };
  var switch_state_with_id = function(state, id) { sc.sendEvent('switchStateWithId', state, id); };

  app.Router = backbone.Router.extend({
    routes: {

      'events': 'events',

      'profile': 'profile',

      'teams/:id': 'team',
      
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

    team: function(id) {
      switch_state_with_id('team', id);
    },

    dashboard: function() {
      switch_state('dashboard');
    }

  });

})(App, Backbone);