/*globals App*/
// #= require '../controllers/profile_controller'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  var profileController = app.Controllers.Profiles;

  var navigate = function(url) {
    app.Router.navigate(url, { trigger: true });
  };

  sc.addState('nav', {

    globalConcurrentState: 'navigation',

    enterState: function() {
      this.model = profileController.currentUser;

      this.view = new views.Navigation({ model: this.model });
      this.view.render();
    },

    exitState: function() {
      if (this.model) delete this.model;
      if (this.view) this.view.close();
    },

    switchState: function(state) { sc.goToState(state, 'default'); },

    switchStateWithId: function(state, id) { sc.goToState(state, 'default', 'default', { id: id }); },

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