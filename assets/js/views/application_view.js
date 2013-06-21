/*globals Backbone, App*/
// #= require 'base_view'
// #= require 'header_view'

(function(app) {
  'use strict';

  var BaseView = app.Views.Base;
  var HeaderView = app.Views.Header;

  app.Views.Application = BaseView.extend({

    template: window.JadeTemplates['templates/application'],

    el: '.container',

    events: {
      'click .page': { event: 'hideNavigation' }
    },

    render: function() {
      this.$el.html(this.template());

      var header = new HeaderView();
      header.render();
      this.views.push(header);
      return this;
    },

    showNavigation: function() { this.$el.addClass('showNav'); },

    hideNavigation: function() { this.$el.removeClass('showNav'); }

  });

})(App, Backbone);