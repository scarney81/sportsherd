/*globals App*/
(function(app) {
  "use strict";

  var data = app.Data;
  var sc = app.Statechart;
  var views = app.Views;

  sc.addState('profile', {

    parentState: 'application',

    enterState: function() {
      this.model = data.Profiles.get('my');

      this.view = new views.Profile({ model: this.model });
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      if (this.model) delete this.model;
      if (this.view) this.view.close();
    }

  });

})(App);