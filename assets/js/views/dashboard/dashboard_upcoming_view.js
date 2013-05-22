/*globals App*/
// #= require 'base_dashboard_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.UpcomingDashboard = views.BaseDashboard.extend({

    template: window.JadeTemplates['templates/dashboard/upcoming'],

    showDashboard: function() { return this.sendEvent('showUpcoming'); }

  });
})(App);