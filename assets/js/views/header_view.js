/*globals App*/
// #= require 'base_view'

(function(app) {
  'use strict';

  var views = app.Views;
  views.Header = views.Base.extend({

    template: window.JadeTemplates['templates/header'],

    el: 'header.header',

    events: {
      'click .nav-btn': 'toggleNavigation'
    },

    toggleNavigation: function(e) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      this.sendEvent('toggleNavigation');
    }

  });
})(App);