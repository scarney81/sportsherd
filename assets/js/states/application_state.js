/*globals App*/
(function(app, backbone) {
  "use strict";

  var data = app.Data;
  var Profile = app.Models.Profile;
  var sc = app.Statechart;
  var views = app.Views;

  sc.addState('application', {

    enterState: function() {
      this.view = new views.Application();
      this.view.render();

      var profile = data.Profiles.get('my');

      if(!!!profile) {
        profile = new Profile({ id: 'my' });
        profile.fetch({
          success: function(profile) {
            data.Profiles.push(profile);
            sc.goToState('nav', 'navigation');
            backbone.history.start({ pushState: true });
          }
        });
      }
    },

    exitState: function() {
      if(this.view) this.view.close();
    },

    toggleNavigation: function() {
      if (this.view) this.view.toggleNavigation();
    }

  });  

})(App, Backbone);