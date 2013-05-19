// #= require 'base_dashboard_view'

(function() {
  window.SH.UpcomingDashboardView = window.SH.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/upcoming'],

    showDashboard: function() { return this.sendEvent('showUpcoming'); }

  });
})();