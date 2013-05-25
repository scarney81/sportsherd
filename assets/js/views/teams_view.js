/*globals App*/
// #= require 'base_collection_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Teams = views.Collection.extend({

    template: window.JadeTemplates['templates/teams'],

    className: 'teams',

    initialize: function() {
      this.collection.on('add', this.renderModel, this);
      this.collection.on('reset', this.render, this);
      views.Teams.__super__.initialize.call(this);
    },

    renderModel: function(team) {
      var view = new views.Team({ model: team });
      this.$el.find('ul.teams').append(view.render().el);
      this.views.push(view);
    }

  });

})(App);