// #= require 'base_dashboard_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.EventsDashboardView = views.BaseDashboardView.extend({

    template: window.JadeTemplates['templates/dashboard/events'],

    initialize: function() {
      this.collection.on('add', this.renderEvent, this);
      this.collection.on('reset', this.render, this);
      views.EventsDashboardView.__super__.initialize.call(this);
    },

    showDashboard: function() { return this.sendEvent('showEvents'); },

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