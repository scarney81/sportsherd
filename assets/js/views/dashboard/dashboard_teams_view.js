// #= require 'base_dashboard_view'

(function() {
  window.SH.TeamsDashboardView = window.SH.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/teams'],

    showDashboard: function() { return this.sendEvent('showTeams'); }

  });
})();