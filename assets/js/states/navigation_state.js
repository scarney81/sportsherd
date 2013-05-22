/*globals App*/
(function(app) {
  "use strict";

  var sc = app.statechart;
  var views = app.Views;

  var navigate = function(url) {
    return function() { app.router.navigate(url, { trigger: true }); };
  };

  sc.addState('nav', {

    globalConcurrentState: 'navigation',

    enterState: function() {
      this.view = new views.NavigationView();
      this.view.render();
    },

    exitState: function() {
      if (this.view) this.view.close();
    },

    switchState: function(state) { sc.goToState(state, 'default'); },

    logout: function() { window.location.href = '/logout'; },

    gotoProfile: navigate('/profile'),

    gotoDashboard: navigate(''),

    gotoEvents: navigate('/events'),

    gotoTeams: navigate('/teams')

  });

})(App);