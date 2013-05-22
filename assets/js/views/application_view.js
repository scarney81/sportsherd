// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.ApplicationView = views.Base.extend({

    template: window.JadeTemplates['templates/application'],

    el: '.container',

    render: function() {
      this.$el.html(this.template());

      var header = new window.SH.HeaderView();
      header.render();
      this.views.push(header);
      return this;
    },

    toggleNavigation: function() {
      var $container = this.$el;
      if ($container.hasClass('showNav')) $container.removeClass('showNav');
      else $container.addClass('showNav');
    }

  });

})(window.SH, Backbone);