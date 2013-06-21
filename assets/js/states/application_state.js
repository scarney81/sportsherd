/*globals Backbone, App*/
// #= require '../controllers/profile_controller'

(function(app, backbone) {
  'use strict';

  var sc = app.Statechart;
  var profileController = app.Controllers.Profiles;

  sc.addState('application', {

    enterState: function() {
      this.view = new app.Views.Application();
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
      if (sc.inState('nav-hidden', 'navigation')) this.sendEvent('showNavigation');
      else this.sendEvent('hideNavigation');
    },

    hideNavigation: function() {
      if (this.view) {
        this.view.hideNavigation();
        this.view.undelegateEvents();
      }
      sc.goToState('nav-hidden', 'navigation');
    },

    showNavigation: function() {
      if (this.view) {
        this.view.showNavigation();
        this.view.delegateEvents();
      }
      sc.goToState('nav-visible', 'navigation');
    }

  });

})(App, Backbone);