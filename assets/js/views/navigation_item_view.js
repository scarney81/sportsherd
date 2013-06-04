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

    navigate: function() {
      var event = this.model.get('event');
      this.sendEvent(event);
    }

  });

})(App);