/*globals App*/
(function(app, backbone) {
  "use strict";

  app.Models.NavigationItem = backbone.Model.extend({

    initialize: function() {
      this.set('isActive', false);
    }

  });

})(App, Backbone);