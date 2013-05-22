(function(app, backbone) {

  app.Models.Team = backbone.Model.extend({

    urlRoot: '/team'

  });

})(window.SH, Backbone);