/*globals App*/
// #= require '../base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.NoTeams = views.Base.extend({
    template: window.JadeTemplates['templates/teams/no-teams']
  });

})(App);