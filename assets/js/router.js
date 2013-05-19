window.SH.Router = Backbone.Router.extend({
  routes: {
    
    '*route': 'dashboard'

  },

  dashboard: function() {
    window.SH.statechart.sendEvent('dashboard');
  }

});