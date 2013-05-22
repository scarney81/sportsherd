/*globals App*/
(function(app, backbone) {

  var sc = app.statechart;
  var views = app.Views;

  sc.addState('application', {

    enterState: function() {
      this.view = new views.ApplicationView();
      this.view.render();

      backbone.history.start({ pushState:true });
    },

    exitState: function() {
      if(this.view) this.view.close();
    },

    toggleNavigation: function() {
      if (this.view) this.view.toggleNavigation();
    }

  });  

})(App, Backbone);