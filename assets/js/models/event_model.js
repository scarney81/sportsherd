/*globals App*/
(function(app, backbone) {
  "use strict";

  app.Models.Event = backbone.Model.extend({

    urlRoot: '/events'

  });

})(App, Backbone);