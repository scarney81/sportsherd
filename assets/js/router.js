/*globals App*/
(function(app, backbone) {

  var sc = app.Statechart;
  var switch_state = function(state) { sc.sendEvent('switchState', state); };
  var switch_state_with_id = function(state, id) { sc.sendEvent('switchStateWithId', state, id); };

  app.Router = backbone.Router.extend({
    routes: {

      'events': 'events',
      
      'events/:id': 'event',

      'profile': 'profile',

      'teams/new': 'newTeam',

      'teams/:id': 'team',
      
      'teams': 'teams',
      
      '*route': 'dashboard'

    },

    events: function() {
      switch_state('events-list');
    },

    event: function(id) {
      switch_state_with_id('event', id);
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

    newTeam: function() {
      switch_state('teams-new');
    },

    dashboard: function() {
      switch_state('dashboard');
    }

  });

})(App, Backbone);