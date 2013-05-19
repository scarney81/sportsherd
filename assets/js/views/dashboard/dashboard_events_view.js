// #= require 'base_dashboard_view'

(function() {
  window.SH.EventsDashboardView = window.SH.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/events'],

    showDashboard: function() { return this.sendEvent('showEvents'); }

  });
})();