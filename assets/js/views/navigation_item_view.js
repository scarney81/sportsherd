/*globals App*/
// #= require 'base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  views.NavigationItem = views.Model.extend({

    template: window.JadeTemplates['templates/navigation_item'],

    tagName: 'li',

    events: {
      'click a': 'navigate'
    },

    initialize: function() {
      this.model.on('change:isActive', this.changeActivation, this);
    },

    changeActivation: function(model, isActive) {
      if (isActive) this.$el.addClass('is-active');
      else this.$el.removeClass('is-active');
      return this;
    },

    navigate: function() {
      this.sendEvent('toggleNavigation');
      return this;
    }

  });

})(App);