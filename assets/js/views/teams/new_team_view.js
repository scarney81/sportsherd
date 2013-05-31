/*globals App*/
// #= require '../base_model_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  views.NewTeam = views.Base.extend({

    template: window.JadeTemplates['templates/teams/new'],

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      return this;
    },

    renderGroups: function(groups) {
      var view = new views.Groups({ collection: groups });
      this.$el.find('.groups').html(view.render().el);
      this.views.push(view);
    }

  });

})(App);