/*globals App*/
// #= require '../controllers/profile_controller'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  var profileController = app.Controllers.Profiles;

  sc.addState('profile', {

    parentState: 'application',

    enterState: function() {
      this.model = profileController.currentUser;

      this.view = new views.Profile({ model: this.model });
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      if (this.model) delete this.model;
      if (this.view) this.view.close();
    }

  });

})(App);