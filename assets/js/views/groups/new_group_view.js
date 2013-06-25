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
      'change #privacy': 'updateModel',
      'click input.next': 'next'
    },

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    },

    updateModel: function(e) {
      this._hideStatusMessage();
      this.$el.find('input.next').show();
      var $target = $(e.target);
      this.model.set($target.attr('id'), $target.val());
      return this;
    },

    _hideStatusMessage: function() {
      this.$el.find('.status').fadeOut();
      return this;
    },

    _setStatusMessage: function(message) {
      this.$el.find('.status').text(message).fadeIn();
      return this;
    },

    showSuccessMessage: function() {
      setTimeout(function() { sc.sendEvent('completed'); }, 3000);
      return this._setStatusMessage('Group successfully created! Redirect in 3 seconds.');
    },

    hideSuccessMessage: function() {
      return this._hideStatusMessage();
    },

    showFailureMessage: function() {
      this.$el.find('input.next').show();
      return this._setStatusMessage('Group creation FAILED!');
    },

    hideFailureMessage: function() {
      return this._hideStatusMessage();
    },

    next: function() {
      if (this.model.isValid()) {
        this.$el.find('input.next').hide();
        sc.sendEvent('saveGroup', this.model);
      }
      else this._setStatusMessage('Model is not valid');
      return this;
    }

  });

})(App);