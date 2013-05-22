/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.HeaderView = views.Base.extend({

    template: window.JadeTemplates['templates/header'],

    el: 'header.header',

    events: {
      'click .nav-btn': 'toggleNavigation'
    },

    toggleNavigation: function() {
      this.sendEvent('toggleNavigation');
    }

  });
})(App);