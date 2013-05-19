(function() {

  var switch_state = function(state) {
    window.SH.statechart.sendEvent('switchState', state);
  };

  window.SH.Router = Backbone.Router.extend({
    routes: {

      'events': 'events',

      'profile': 'profile',
      
      'teams': 'teams',
      
      '*route': 'dashboard'

    },

    events: function() {
      switch_state('events');
    },

    profile: function() {
      switch_state('profile');
    },

    teams: function() {
      switch_state('teams');
    },

    dashboard: function() {
      switch_state('dashboard');
    }

  });

})();