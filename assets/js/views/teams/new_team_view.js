/*globals App*/
// #= require '../base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  views.NewTeam = views.Base.extend({

    template: window.JadeTemplates['templates/teams/new'],

    events: {
      'click .selectTeam': 'newSelectTeam',
      'click .createTeam': 'newCreateTeam'
    },

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    }

  });

})(App);