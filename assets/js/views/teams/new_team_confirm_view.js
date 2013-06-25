/*globals App*/
// #= require '../base_model_view'

(function(app) {
  'use strict';

  var sc = app.Statechart;
  var views = app.Views;
  views.NewTeamConfirm = views.Model.extend({

    template: window.JadeTemplates['templates/teams/new_confirm'],

    events: {
      'click .confirm': 'save'
    },

    render: function() {
      var data = this.model ? this.model.toJSON() : {};
      this.$el.html(this.template(data));
      this.delegateEvents();
      return this;
    },

    save: function() {
      console.log(this.$input);
      alert('saving ' + $('input.name').val());
    }

  });

})(App);