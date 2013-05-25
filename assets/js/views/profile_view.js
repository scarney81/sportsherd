/*globals App*/
// #= require 'base_model_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Profile = views.Model.extend({

    template: window.JadeTemplates['templates/profile'],

    className: 'profile'

  });

})(App);