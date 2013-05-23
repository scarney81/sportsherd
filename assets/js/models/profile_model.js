/*globals App*/
(function(app, backbone) {
  "use strict";

  app.Models.Profile = backbone.Model.extend({

    urlRoot: '/profile'

  });

})(App, Backbone);