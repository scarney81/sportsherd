/*globals App, Backbone*/
(function(app, backbone) {
  'use strict';

  app.Models.Team = backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/teams',

    defaults: {
      'name':  '',
      'facebookGroupId': null
    },

    validate: function(attrs) {
      var errors = [];

      if (!attrs.name || attrs.name.length < 1) errors.push({ name: 'name', message: 'Name is required for your Team.  You can think of something!' });

      return errors.length > 0 ? errors : false;
    }

  });

})(App, Backbone);