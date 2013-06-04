/*globals App*/
// #= require 'base_view'
// #= require_tree 'dashboard'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Dashboard = views.Base.extend({

    template: window.JadeTemplates['templates/dashboard'],

    className: 'dashboard',

    initialize: function(teams, evts) {
      this.teams = teams;
      this.evts = evts;
      this.subviews = [];
      views.Dashboard.__super__.initialize.call(this);
    },

    _renderSubView: function(view, name) {
      this.$el.append(view.render().el);
      this.views.push(view); // add to views collection for cleanup on close
      this.subviews[name] = view;
    },

    render: function() {
      this.$el.html(this.template());

      var teamsView = new views.TeamsDashboard({ collection: this.teams });
      this._renderSubView(teamsView, 'teams');
      
      var eventsView = new views.EventsDashboard({ collection: this.evts });
      this._renderSubView(eventsView, 'events');
      
      return this;
    },

    close: function() {
      if (this.subviews) delete this.subviews;
      if (this._teamsView) delete this._teamsView;
      if (this._eventsView) delete this._eventsView;
      views.Dashboard.__super__.close.call(this);
    },

    disableDashboardNav: function() {
      this.undelegateEvents();
      this.views.forEach(function(view) {
        view.undelegateEvents();
      });
    },

    enableDashboardNav: function() {
      this.delegateEvents();
      this.views.forEach(function(view) {
        view.delegateEvents();
      });
    },

    busy: function(section) {
      this.disableDashboardNav();
      var view = this.subviews[section];
      if (view) view.busy();
    },

    idle: function(section) {
      this.enableDashboardNav();
      var view = this.subviews[section];
      if (view) view.idle();
    },

    expand: function(section) {
      var view = this.subviews[section];
      if (view) view.expand();
    },

    collapse: function(section) {
      var view = this.subviews[section];
      if (view) view.collapse();
    }

  });

})(App);