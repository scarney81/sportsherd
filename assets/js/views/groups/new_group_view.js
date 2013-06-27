/*globals App*/
/*jshint camelcase:false*/
// #= require '../base_view'

(function(app) {
  'use strict';

  var sc = app.Statechart;

  var NewGroup = app.Views.NewGroup = app.Views.Base.extend({

    template: window.JadeTemplates['templates/groups/new'],

    initialize: function() {
      this.model.on('invalid', this.invalid, this);
      NewGroup.__super__.initialize.call(this);
    },

    events: {
      'change input': 'updateModel',
      'change select': 'updateModel',
      'click input.next': 'next'
    },

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    },

    invalid: function(model, error) {
      var that = this;
      error.forEach(function(e) {
        if (e['name']) that.$el.find('#'+e['name']).addClass('invalid');
      });
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