/*globals App*/
// #= require '../base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  views.TeamProfile = views.Model.extend({

    template: window.JadeTemplates['templates/teams/profile'],

    className: 'teamProfile'

  });

})(App);