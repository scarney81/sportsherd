/*globals App*/
// #= require '../models/navigation_item_model'

(function(app, backbone) {
  "use strict";

  app.Collections.NavigationItems = backbone.Collection.extend({

    model: app.Models.NavigationItem
  
  });

})(App, Backbone);