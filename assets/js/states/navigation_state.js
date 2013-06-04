/*globals App*/
// #= require '../controllers/profile_controller'
// #= require '../controllers/navigation_controller'
// #= require '../views/navigation_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;

  var NavigationView = app.Views.Navigation;
  var profileController = app.Controllers.Profiles;
  var navController = app.Controllers.Navigation;

  var navigate = function(url) {
    app.Router.navigate(url, { trigger: true });
  };

  sc.addState('nav', {

    globalConcurrentState: 'navigation',

    enterState: function() {
      if (!navController.profile) navController.profile = profileController.currentUser;
      var model = navController.getNavigationModel();

      this.view = new NavigationView({ model: model });
      this.view.render();
    },

    exitState: function() {
      if (this.view) this.view.close();
    },

    switchState: function(state) { sc.goToState(state, 'default'); },

    switchStateWithId: function(state, id) { sc.goToState(state, 'default', 'default', { id: id }); },

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