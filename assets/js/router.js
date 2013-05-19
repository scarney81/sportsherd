window.SH.Router = Backbone.Router.extend({
  routes: {

    'events': 'events',
    
    'teams': 'teams',
    
    '*route': 'dashboard'

  },

  events: function() {
    window.SH.statechart.sendEvent('switchState', 'events');
  },

  teams: function() {
    window.SH.statechart.sendEvent('switchState', 'teams');
  },

  dashboard: function() {
    window.SH.statechart.sendEvent('switchState', 'dashboard');
  }

});