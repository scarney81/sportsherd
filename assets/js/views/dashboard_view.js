// #= require 'base_view'
// #= require_tree 'dashboard'

(function() {

  var sh = window.SH;
  sh.DashboardView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/dashboard'],

    className: 'dashboard',

    initialize: function(teams, evts) {
      this.teams = teams;
      this.evts = evts;
      this.subviews = [];
      sh.DashboardView.__super__.initialize.call(this);
    },

    _renderSubView: function(view, name) {
      this.$el.append(view.render().el);
      this.views.push(view); // add to views collection for cleanup on close
      this.subviews[name] = view;
    },

    render: function() {
      this.$el.html(this.template());

      var upcomingView = new sh.UpcomingDashboardView();
      this._renderSubView(upcomingView, 'upcoming');
      
      var teamsView = new sh.TeamsDashboardView({ collection: this.teams });
      this._renderSubView(teamsView, 'teams');
      
      var eventsView = new sh.EventsDashboardView({ collection: this.evts });
      this._renderSubView(eventsView, 'events');
      
      var accountView = new sh.AccountDashboardView();
      this._renderSubView(accountView, 'account');

      return this;
    },

    close: function() {
      if (this.subviews) delete this.subviews;
      if (this._upcomingView) delete this._upcomingView;
      if (this._teamsView) delete this._teamsView;
      if (this._eventsView) delete this._eventsView;
      if (this._accountView) delete this._accountView;
      sh.DashboardView.__super__.close.call(this);
    },

    expand: function(section) {
      if (!this.subviews) return;
      var view = this.subviews[section];
      if (view) view.expand();
    },

    collapse: function(section) {
      if (!this.subviews) return;
      var view = this.subviews[section];
      if (view) view.collapse();
    }

  });

})();