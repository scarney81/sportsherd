/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  views.Collection = views.Base.extend({

    render: function() {
      var self = this;
      this.$el.html(this.template());
      this.collection.each(function(model) { self.renderModel(model); });
      this.delegateEvents();
      return this;
    }

  });

})(App);