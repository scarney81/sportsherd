/*globals App*/
// #= require '../base_model_view'

(function(app) {
  'use strict';

  var views = app.Views;
  views.NewTeamCreate = views.Base.extend({

    template: window.JadeTemplates['templates/teams/new_create'],

    events: {
      'input.next': 'next'
    },

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    },

    next: function() {
      alert('fix me seth');
    }

  });

})(App);