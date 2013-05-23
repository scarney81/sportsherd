/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Navigation = views.Base.extend({

    template: window.JadeTemplates['templates/navigation'],

    el: 'nav#nav',

    events: {
      'click .profile': 'profile',
      'click a.dashboard': 'dashboard',
      'click a.events': 'evts',
      'click a.teams': 'teams',
      'click a.logout': 'logout'
    },

    idle: function() {
      this.delegateEvents();
      return this;
    },

    busy: function() {
      this.undelegateEvents();
      return this;
    },

    profile: function() {
      return this.sendEvent('gotoProfile');
    },

    dashboard: function() {
      return this.sendEvent('gotoDashboard');
    },

    evts: function() {
      return this.sendEvent('gotoEvents');
    },

    teams: function() {
      return this.sendEvent('gotoTeams');
    },

    logout: function() {
      return this.sendEvent('logout');
    }

  });

})(App);