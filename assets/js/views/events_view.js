// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.EventsView = views.Base.extend({

    template: window.JadeTemplates['templates/events'],

    className: 'events',

    initialize: function() {
      this.collection.on('add', this.renderEvent, this);
      this.collection.on('reset', this.render, this);
      views.EventsView.__super__.initialize.call(this);
    },

    render: function() {
      var self = this;
      this.$el.html(this.template());
      this.collection.each(function(event) { self.renderEvent(event); });
      return this;
    },

    renderEvent: function(event) {
      var view = new views.EventView({ model: event });
      this.$el.find('ul.events').append(view.render().el);
      this.views.push(view);
      return this;
    }

  });

})(window.SH);