/*globals App*/
// #= require 'base_dashboard_view'

(function(app) {
  "use strict";
  
  var views = app.Views;
  views.TeamsDashboardView = views.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/teams'],

    initialize: function() {
      this.collection.on('add', this.renderTeam, this);
      this.collection.on('reset', this.render, this);
      views.TeamsDashboardView.__super__.initialize.call(this);
    },

    showDashboard: function() { return this.sendEvent('showTeams'); },

    render: function() {
      var self = this;
      this.$el.html(this.template());
      this.collection.each(function(team) { self.renderTeam(team); });
      return this;
    },

    renderTeam: function(team) {
      var view = new views.TeamView({ model: team });
      this.$el.find('ul.teams').append(view.render().el);
      this.views.push(view);
    }

  });
})(App);