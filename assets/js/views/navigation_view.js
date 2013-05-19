// #= require 'base_view'

(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;
  sh.NavigationView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/navigation'],

    el: 'nav#nav',

    events: {
      'click a.dashboard': 'dashboard',
      'click a.events': 'evts',
      'click a.teams': 'teams',
      'click a.logout': 'logout'
    },

    dashboard: function() {
      sc.sendEvent('gotoDashboard');
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