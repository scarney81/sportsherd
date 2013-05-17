// #= require 'base_view'

window.SH.HeaderView = window.SH.BaseView.extend({

  template: window.JadeTemplates['templates/header'],

  el: 'header.header',

  events: {
    'click .nav-btn': 'toggleNavigation'
  },

  toggleNavigation: function() {
    window.SH.statechart.sendEvent('toggleNavigation');
  }

});