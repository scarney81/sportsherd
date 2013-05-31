/*globals App*/
// #= require '../models/group_model'
(function(app, backbone) {
  "use strict";

  app.Collections.Groups = backbone.Collection.extend({

    url: '/groups',

    model: app.Models.Group
  
  });

})(App, Backbone);