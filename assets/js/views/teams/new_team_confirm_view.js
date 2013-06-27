/*globals App*/
// #= require '../base_model_view'

(function(app) {
  'use strict';

  var sc = app.Statechart;
  var views = app.Views;
  views.NewTeamConfirm = views.Model.extend({

    template: window.JadeTemplates['templates/teams/new_confirm'],

    events: {
      'change #name': 'updateModel',
      'click input.next': 'next'
    },

    render: function() {
      var data = this.model ? this.model.toJSON() : {};
      this.$el.html(this.template(data));
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
      return this._setStatusMessage('Team successfully created! Redirect in 3 seconds.');
    },

    hideSuccessMessage: function() {
      return this._hideStatusMessage();
    },

    showFailureMessage: function() {
      this.$el.find('input.next').show();
      return this._setStatusMessage('Team creation FAILED!');
    },

    hideFailureMessage: function() {
      return this._hideStatusMessage();
    },

    next: function() {
      if (this.model.isValid()) {
        this.$el.find('input.next').hide();
        sc.sendEvent('saveTeam', this.model);
      }
      else this._setStatusMessage(this.model.validationError[0].message); //Todo: Need standard way to display multiple validation errors, or inline highlighting
      return this;
    }

  });

})(App);