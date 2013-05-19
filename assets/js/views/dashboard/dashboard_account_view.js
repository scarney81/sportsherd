// #= require 'base_dashboard_view'

(function() {
  window.SH.AccountDashboardView = window.SH.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/account'],

    showDashboard: function() { return this.sendEvent('showAccount'); }

  });
})();