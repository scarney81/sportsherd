/*globals App*/
// #= require 'base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  views.Event = views.Model.extend({

    template: window.JadeTemplates['templates/event'],

    tagName: 'li',

    className: 'event',

    events: {
      'click a.event': 'showEvent'
    },

    showEvent: function() {
      sc.sendEvent('showEvent', this.model.id);
    }


  });

})(App);