/*globals Backbone*/
// #= require 'base_view'

window.SH.LoginView = window.SH.BaseView.extend({

  template: window.JadeTemplates['templates/login'],

  el: '.container',

  events: {
    'click #login': 'login'
  },

  login: function() {
    window.SH.statechart.sendEvent('login');
  }
});