/*globals App*/
(function(app, backbone) {
  "use strict";

  app.Models.Team = backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/teams'

  });

})(App, Backbone);