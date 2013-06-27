/*globals App*/
// #= require 'base_view'

(function(app) {
  'use strict';

  app.Views.Model = app.Views.Base.extend({

    render: function() {
      var data = this.model ? this.model.toJSON() : {};
      this.$el.html(this.template(data));
      this.delegateEvents();
      return this;
    }

  });

})(App);