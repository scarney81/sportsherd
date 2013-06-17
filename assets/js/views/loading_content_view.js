/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.LoadingContent = views.Base.extend({

    template: window.JadeTemplates['templates/loading_content'],

    className: 'loading'

  });

})(App);