// #= require 'base_dashboard_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.AccountDashboardView = views.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/account'],

    showDashboard: function() { return this.sendEvent('showAccount'); }

  });
})(window.SH);