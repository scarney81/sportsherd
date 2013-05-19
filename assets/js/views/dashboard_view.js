// #= require 'base_view'

(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sh.DashboardView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/dashboard'],

    el: '.content',

    events: {
      'click h3.upcoming': 'showUpcoming',
      'click h3.teams': 'showTeams',
      'click h3.events': 'showEvents',
      'click h3.account': 'showAccount'
    },

    showUpcoming: function() {
      sc.sendEvent('showUpcoming');
      return this;
    },

    showTeams: function() {
      sc.sendEvent('showTeams');
      return this;
    },

    showEvents: function() {
      sc.sendEvent('showEvents');
      return this;
    },

    showAccount: function() {
      sc.sendEvent('showAccount');
      return this;
    },

    expandUpcoming: function() {
      this.$el.find('h3.upcoming').next('p').removeClass('hidden');
      return this;
    },

    expandTeams: function() {
      this.$el.find('h3.teams').next('p').removeClass('hidden');
      return this;
    },

    expandEvents: function() {
      this.$el.find('h3.events').next('p').removeClass('hidden');
      return this;
    },

    expandAccount: function() {
      this.$el.find('h3.account').next('p').removeClass('hidden');
      return this;
    },

    collapseUpcoming: function() {
      this.$el.find('h3.upcoming').next('p').addClass('hidden');
      return this;
    },

    collapseTeams: function() {
      this.$el.find('h3.teams').next('p').addClass('hidden');
      return this;
    },

    collapseEvents: function() {
      this.$el.find('h3.events').next('p').addClass('hidden');
      return this;
    },

    collapseAccount: function() {
      this.$el.find('h3.account').next('p').addClass('hidden');
      return this;
    }

  });

})();