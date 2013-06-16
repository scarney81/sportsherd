/*globals App*/
// #= require '../base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  views.Team = views.Model.extend({

    template: window.JadeTemplates['templates/teams/item'],

    tagName: 'li',

    className: 'team'

  });

})(App);