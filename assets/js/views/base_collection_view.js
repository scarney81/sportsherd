/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  views.Collection = views.Base.extend({

    initialize: function() {
      this.collection.on('add', this.renderModel, this);
      this.collection.on('reset', this.render, this);
      views.Collection.__super__.initialize.call(this);
    },

    render: function() {
      var self = this;
      this.$el.html(this.template());
      this.collection.each(function(model) { self.renderModel(model); });
      this.delegateEvents();
      return this;
    },

    renderModel: function() { return this; }

  });

})(App);