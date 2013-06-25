/*globals App*/
// #= require '../base_view'

(function(app) {
  'use strict';

  var views = app.Views;
  var sc = app.Statechart;
  views.NewGroup = views.Base.extend({

    template: window.JadeTemplates['templates/groups/new'],

    events: {
      'change input': 'updateModel',
      'click input.next': 'next'
    },

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    },

    updateModel: function(e) {
      var $target = $(e.target);
      this.model.set($target.attr('id'), $target.val());
      return this;
    },

    showSuccessMessage: function() {
      // TODO: show success message
      // TODO: change button
      return this;
    },

    hideSuccessMessage: function() {
      // TODO: hide message
      return this;
    },

    showFailureMessage: function() {
      // TODO: show failure message
      return this;
    },

    hideFailureMessage: function() {
      // TODO: hide message
      return this;
    },

    next: function() {
      if (this.model.isValid()) sc.sendEvent('saveGroup', this.model);
      else alert('Model is not valid');
      return this;
    }

  });

})(App);