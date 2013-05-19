// #= require 'base_dashboard_view'

(function() {
  var sh = window.SH;
  sh.TeamsDashboardView = sh.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/teams'],

    initialize: function() {
      this.collection.on('add', this.renderTeam, this);
      this.collection.on('reset', this.render, this);
      sh.TeamsDashboardView.__super__.initialize.call(this);
    },

    render: function() {
      var self = this;
      this.$el.html(this.template());
      this.collection.each(function(team) { self.renderTeam(team); });
      return this;
    },

    showDashboard: function() { return this.sendEvent('showTeams'); },

    renderTeam: function(team) {
      var view = new sh.TeamView({ model: team });
      this.$el.find('ul.teams').append(view.render().el);
      this.views.push(view);
    }

  });
})();