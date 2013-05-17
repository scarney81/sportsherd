// #= require 'base_view'

window.SH.NavigationView = window.SH.BaseView.extend({

  template: window.JadeTemplates['templates/navigation'],

  el: 'nav#nav',

  events: {
    'click .logout': 'logout'
  },

  logout: function() {
    window.SH.statechart.sendEvent('logout');
    return this;
  }

});