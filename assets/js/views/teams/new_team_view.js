/*globals App*/
// #= require '../base_model_view'

(function(app) {
  'use strict';

  var views = app.Views;
  views.NewTeam = views.Base.extend({

    template: window.JadeTemplates['templates/teams/new'],

    events: {
      'click .selectTeam': 'newSelectTeam'
    }

  });

})(App);