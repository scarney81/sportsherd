/*globals App*/
// #= require 'base_view'

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  views.Model = views.Base.extend({

    render: function() {
      var data = this.model ? this.model.toJSON() : {};
      this.$el.html(this.template(data));
      this.delegateEvents();
      return this;
    }

  });

})(App);