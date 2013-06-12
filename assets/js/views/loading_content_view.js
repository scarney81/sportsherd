/*globals App*/
// #= require 'base_model_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.LoadingContent = views.Model.extend({

    template: window.JadeTemplates['templates/loading_content'],

    className: 'loading'

  });

})(App);