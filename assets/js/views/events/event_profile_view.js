/*globals App*/
// #= require '../base_model_view'

(function(app) {
  "use strict";

  var views = app.Views;

  views.EventProfile = views.Model.extend({

    template: window.JadeTemplates['templates/events/event_profile'],

    className: 'event',

    initialize: function() {
      this.model.on('change', this.render, this);
    }

  });

})(App);