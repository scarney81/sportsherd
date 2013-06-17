/*globals App*/
// #= require '../base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  views.NewTeam = views.Base.extend({

    template: window.JadeTemplates['templates/teams/new'],

    events: {
      'click .selectTeam': 'selectTeam',
      'click .createTeam': 'createTeam'
    },

    selectTeam: function() {
      return this.sendEvent('newSelectTeam');
    },

    createTeam: function() {
      return this.sendEvent('newCreateTeam');
    },

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    }

  });

})(App);