/*globals App*/
// #= require '../controllers/profile_controller'
// #= require '../controllers/navigation_controller'
// #= require '../views/navigation_view'

(function(app) {
  'use strict';

  var sc = app.Statechart;

  var NavigationView = app.Views.Navigation;
  var profileController = app.Controllers.Profiles;
  var navController = app.Controllers.Navigation;

  sc.addState('nav', {

    globalConcurrentState: 'navigation',

    initialSubstate: 'nav-hidden',

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

    states: [
      { name: 'nav-hidden' },
      { name: 'nav-visible' }
    ]

  });

})(App);