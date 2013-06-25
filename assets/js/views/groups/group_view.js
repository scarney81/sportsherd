/*globals App*/
// #= require '../base_model_view'

(function(app) {
  'use strict';

  var views = app.Views;
  views.Group = views.Model.extend({

    template: window.JadeTemplates['templates/groups/item'],

    tagName: 'li',

    className: 'group',

    events: {
      'click a': { event: 'selectGroup', data: function() { return this.model; } }
    }

  });

})(App);