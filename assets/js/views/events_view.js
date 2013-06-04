/*globals App*/
// #= require 'base_collection_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Events = views.Collection.extend({

    template: window.JadeTemplates['templates/events'],

    className: 'events',

    renderModel: function(event) {
      var view = new views.Event({ model: event });
      this.$el.find('ul.events').append(view.render().el);
      this.views.push(view);
      return this;
    }

  });

})(App);