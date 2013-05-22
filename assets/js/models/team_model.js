/*globals App*/
(function(app, backbone) {
  "use strict";

  app.Models.Team = backbone.Model.extend({

    urlRoot: '/team'

  });

})(App, Backbone);