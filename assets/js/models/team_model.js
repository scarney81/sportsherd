(function(app, backbone) {
  "use strict";

  app.Models.Team = backbone.Model.extend({

    urlRoot: '/team'

  });

})(window.SH, Backbone);