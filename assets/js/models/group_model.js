/*globals App, Backbone*/
(function(app, backbone) {
  'use strict';

  app.Models.Group = backbone.Model.extend({

    urlRoot: '/groups',

    defaults: {
      'name': '',
      'description': ''
    },

    validate: function(attrs) {
      var errors = [];

      if (!attrs.name) errors.push({ name: 'name', message: 'Name is required' });

      return errors.length > 0 ? errors : false;
    }

  });

})(App, Backbone);