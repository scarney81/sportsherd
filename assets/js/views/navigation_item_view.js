/*globals App*/
// #= require 'base_model_view'

(function(app) {
  'use strict';

  var views = app.Views;
  views.NavigationItem = views.Model.extend({

    template: window.JadeTemplates['templates/navigation_item'],

    tagName: 'li',

    events: {
      'click a': 'hideNavigation'
    },

    initialize: function() {
      this.model.on('change:isActive', this.changeActivation, this);
    },

    changeActivation: function(model, isActive) {
      if (isActive) this.$el.addClass('is-active');
      else this.$el.removeClass('is-active');
      return this;
    }

  });

})(App);