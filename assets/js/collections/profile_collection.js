/*globals App*/
// #= require '../models/profile_model'
(function(app, backbone) {
  "use strict";

  app.Collections.Profiles = backbone.Collection.extend({

    model: app.Models.Profile
  
  });

})(App, Backbone);