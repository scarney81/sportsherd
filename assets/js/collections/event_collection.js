// #= require '../models/event_model'
(function(app, backbone) {

  app.Collections.Events = backbone.Collection.extend({

    url: '/events',

    model: app.Models.Event
  
  });

})(window.SH, Backbone);