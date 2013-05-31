/*globals App*/
(function(app, backbone) {
  "use strict";

  app.Models.Group = backbone.Model.extend({

    urlRoot: '/groups'

  });

})(App, Backbone);