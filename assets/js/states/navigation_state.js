/*globals App*/
(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  var navigate = function(url) {
    app.Router.navigate(url, { trigger: true });
  };

  sc.addState('nav', {

    globalConcurrentState: 'navigation',

    enterState: function() {
      this.view = new views.Navigation();
      this.view.render();
    },

    exitState: function() {
      if (this.view) this.view.close();
    },

    switchState: function(state) { sc.goToState(state, 'default'); },

    idle: function() { this.view.idle(); },

    busy: function() { this.view.busy(); },

    logout: function() { window.location.href = '/logout'; },

    gotoProfile: function() { this.go('/profile'); },

    gotoDashboard: function() { this.go(''); },

    gotoEvents: function() { this.go('/events'); },

    gotoTeams: function() { this.go('/teams'); },

    go: function(url) {
      this.sendEvent('toggleNavigation');
      navigate(url);
    }

  });

})(App);