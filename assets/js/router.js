window.Sportsherd.Router = Backbone.Router.extend({
  routes: {
    
    'public/login': 'login',

    '*route': 'home'

  },

  login: function() {
    window.Sportsherd.statechart.sendEvent('doLogin');
  },

  home: function() {
    window.Sportsherd.statechart.sendEvent('home');
  }

});