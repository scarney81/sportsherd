/*globals App, Backbone*/
(function(app, backbone) {
  'use strict';

  app.Models.Team = backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/teams',

    defaults: {
      'name':  '',
      'facebookGroupId': null
    }

  });

})(App, Backbone);