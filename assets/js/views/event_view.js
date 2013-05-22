/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.EventView = views.Base.extend({

    template: window.JadeTemplates['templates/event'],

    tagName: 'li',

    className: 'event'

  });

})(App);