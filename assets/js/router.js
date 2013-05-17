window.SH.Router = Backbone.Router.extend({
  routes: {
    
    'public/login': 'login',

    '*route': 'home'

  },

  login: function() {
    window.SH.statechart.sendEvent('doLogin');
  },

  home: function() {
    window.SH.statechart.sendEvent('home');
  }

});