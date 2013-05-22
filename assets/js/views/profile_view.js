/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Profile = views.Base.extend({

    template: window.JadeTemplates['templates/profile'],

    className: 'profile'

  });

})(App);