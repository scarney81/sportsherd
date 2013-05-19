// #= require 'base_view'

(function() {

  var sh = window.SH;
  sh.EventsView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/events'],

    className: 'events',

    initialize: function() {
      this.collection.on('add', this.renderEvent, this);
      this.collection.on('reset', this.render, this);
      sh.EventsView.__super__.initialize.call(this);
    },

    render: function() {
      var self = this;
      this.$el.html(this.template());
      this.collection.each(function(event) { self.renderEvent(event); });
      return this;
    },

    renderEvent: function(event) {
      var view = new sh.EventView({ model: event });
      this.$el.find('ul.events').append(view.render().el);
      this.views.push(view);
    }

  });

})();