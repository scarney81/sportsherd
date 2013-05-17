/*globals Backbone*/
// #= require 'base_view'

window.SH.ApplicationView = window.SH.BaseView.extend({

	template: window.JadeTemplates['templates/application'],

	el: '.container',

  events: {
    'click .logout': 'logout'
  },

  logout: function() {
    window.SH.statechart.sendEvent('logout');
    return this;
  }
  
});