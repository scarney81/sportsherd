/*globals App, Backbone*/
(function(app, backbone) {
  'use strict';

  var sc = app.Statechart;
  var switchState = function(state) { sc.sendEvent('switchState', state); };
  var switchStateWithId = function(state, id) { sc.sendEvent('switchStateWithId', state, id); };

  app.Router = backbone.Router.extend({
    routes: {

      'events': 'events',

      'events/:id': 'event',

      'profile': 'profile',

      'teams/new': 'newTeam',

      'teams/:id': 'team',

      'groups/new': 'newGroup',

      'teams': 'teams',

      'logout': 'logout',

      '*route': 'dashboard'

    },

    events: function() {
      switchState('events-list');
    },

    event: function(id) {
      switchStateWithId('event', id);
    },

    profile: function() {
      switchState('profile');
    },

    teams: function() {
      switchState('teams-list');
    },

    team: function(id) {
      switchStateWithId('team', id);
    },

    newGroup: function() {
      switchState('groups-new');
    },

    newTeam: function() {
      switchState('teams-new');
    },

    dashboard: function() {
      switchState('dashboard');
    },

    logout: function() {
      sc.sendEvent('logout');
    }

  });

})(App, Backbone);