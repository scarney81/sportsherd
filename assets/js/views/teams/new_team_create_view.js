/*globals App*/
// #= require '../base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  views.NewTeamCreate = views.Base.extend({

    template: window.JadeTemplates['templates/teams/new_create'],

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    }

  });

})(App);