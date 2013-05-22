/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Teams = views.Base.extend({

    template: window.JadeTemplates['templates/teams'],

    className: 'teams',

    initialize: function() {
      this.collection.on('add', this.renderTeam, this);
      this.collection.on('reset', this.render, this);
      views.Teams.__super__.initialize.call(this);
    },

    render: function() {
      var self = this;
      this.$el.html(this.template());
      this.collection.each(function(team) { self.renderTeam(team); });
      return this;
    },

    renderTeam: function(team) {
      var view = new views.Team({ model: team });
      this.$el.find('ul.teams').append(view.render().el);
      this.views.push(view);
    }

  });

})(App);