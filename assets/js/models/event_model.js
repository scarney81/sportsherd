/*globals App*/
(function(app, backbone) {
  "use strict";

  app.Models.Event = backbone.Model.extend({

    urlRoot: '/event'

  });

})(App, Backbone);