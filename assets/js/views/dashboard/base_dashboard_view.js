// #= require '../base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.BaseDashboardView = views.Base.extend({

    events: {
      'click h3': 'showDashboard'
    },

    showDashboard: function() {
      return this;
    },

    busy: function() {
      this.$el.find('h3').append(' - Loading...');
    },

    idle: function() {
      var $head = this.$el.find('h3');
      $head.text($head.text().replace(' - Loading...', ''));
    },

    expand: function() {
      this.$el.find('ul').removeClass('hidden');
      return this;
    },

    collapse: function() {
      this.$el.find('ul').addClass('hidden');
      return this;
    }

  });

})(App, Backbone);