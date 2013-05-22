/*globals App*/
(function(app) {
  "use strict";

  var sc = app.statechart;
  var views = app.Views;

  sc.addState('profile', {

    parentState: 'application',

    enterState: function() {
      this.view = new views.ProfileView();
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

})(App);