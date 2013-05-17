window.SH.Router = Backbone.Router.extend({
  routes: {
    
    '*route': 'home'

  },

  home: function() {
    window.SH.statechart.sendEvent('home', 'navigation');
  }

});