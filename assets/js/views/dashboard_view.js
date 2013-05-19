// #= require 'base_view'

(function() {

  var sh = window.SH;
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
      return this.sendEvent('showUpcoming');
    },

    showTeams: function() {
      return this.sendEvent('showTeams');
    },

    showEvents: function() {
      return this.sendEvent('showEvents');
    },

    showAccount: function() {
      return this.sendEvent('showAccount');
    },

    expand: function(element) {
      this.$el.find('h3.'+element).next('p').removeClass('hidden');
      return this;
    },

    collapse: function(element) {
      this.$el.find('h3.'+element).next('p').addClass('hidden');
      return this;
    },

    expandUpcoming: function() { return this.expand('upcoming'); },

    expandTeams: function() { return this.expand('teams'); },

    expandEvents: function() { return this.expand('events'); },

    expandAccount: function() { return this.expand('account'); },

    collapseUpcoming: function() { return this.collapse('upcoming'); },

    collapseTeams: function() { return this.collapse('teams'); },

    collapseEvents: function() { return this.collapse('events'); },

    collapseAccount: function() { return this.collapse('account'); }

  });

})();