// #= require 'base_view'

(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;
  sh.NavigationView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/navigation'],

    el: 'nav#nav',

    events: {
      'click .profile': 'profile',
      'click a.dashboard': 'dashboard',
      'click a.events': 'evts',
      'click a.teams': 'teams',
      'click a.logout': 'logout'
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

})();