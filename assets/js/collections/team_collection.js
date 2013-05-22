// #= require '../models/team_model'
(function(app, backbone) {
  "use strict";

  app.Collections.Teams = backbone.Collection.extend({

    url: '/teams',

    model: app.Models.Team
  
  });

})(window.SH, Backbone);