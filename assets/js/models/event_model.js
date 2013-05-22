(function(app, backbone) {
  "use strict";

  app.Models.Event = backbone.Model.extend({

    urlRoot: '/event'

  });

})(window.SH, Backbone);