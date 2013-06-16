/*globals App*/
// #= require '../base_collection_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Teams = views.Collection.extend({

    template: window.JadeTemplates['templates/teams/list'],

    tagName: 'ul',

    className: 'teams',

    renderModel: function(team) {
      var view = new views.Team({ model: team });
      this.$el.append(view.render().el);
      this.views.push(view);
    }

  });

})(App);