/*globals App*/
// #= require '../controllers/profile_controller'

(function(app, backbone) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  var profileController = app.Controllers.Profiles;

  sc.addState('application', {

    enterState: function() {
      this.view = new views.Application();
      this.view.render();

      profileController.fetchCurrent(function() {
        sc.goToState('nav', 'navigation');
        backbone.history.start({ pushState: true });
      });
    },

    exitState: function() {
      if(this.view) this.view.close();
    },

    toggleNavigation: function() {
      if (this.view) this.view.toggleNavigation();
    }

  });  

})(App, Backbone);