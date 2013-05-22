(function(app, backbone) {

  app.Models.Event = backbone.Model.extend({

    urlRoot: '/event'

  });

})(window.SH, Backbone);