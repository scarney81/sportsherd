// #= require 'base_view'
// #= require_tree 'dashboard'

(function() {

  var sh = window.SH;
  sh.DashboardView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/dashboard'],

    className: 'dashboard',

    initialize: function(teams) {
      this.teams = teams;
      sh.DashboardView.__super__.initialize.call(this);
    },

    _renderSubView: function(view) {
      this.$el.append(view.render().el);
      this.views.push(view); // add to views collection for cleanup on close
    },

    render: function() {
      this.$el.html(this.template());

      this._upcomingView = new sh.UpcomingDashboardView();
      this._renderSubView(this._upcomingView);
      
      this._teamsView = new sh.TeamsDashboardView({ collection: this.teams });
      this._renderSubView(this._teamsView);
      
      this._eventsView = new sh.EventsDashboardView();
      this._renderSubView(this._eventsView);
      
      this._accountView = new sh.AccountDashboardView();
      this._renderSubView(this._accountView);

      return this;
    },

    close: function() {
      if (this._upcomingView) delete this._upcomingView;
      if (this._teamsView) delete this._teamsView;
      if (this._eventsView) delete this._eventsView;
      if (this._accountView) delete this._accountView;
      sh.DashboardView.__super__.close.call(this);
    },

    expandUpcoming: function() { if (this._upcomingView) this._upcomingView.expand(); },

    expandTeams: function() { if (this._teamsView) this._teamsView.expand(); },

    expandEvents: function() { if (this._eventsView) this._eventsView.expand(); },

    expandAccount: function() { if (this._accountView) this._accountView.expand(); },

    collapseUpcoming: function() { if (this._upcomingView) this._upcomingView.collapse(); },

    collapseTeams: function() { if (this._teamsView) this._teamsView.collapse(); },

    collapseEvents: function() { if (this._eventsView) this._eventsView.collapse(); },

    collapseAccount: function() { if (this._accountView) this._accountView.collapse(); }

  });

})();