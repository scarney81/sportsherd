/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Team = views.Base.extend({

    template: window.JadeTemplates['templates/team'],

    tagName: 'li',

    className: 'team'

  });

})(App);