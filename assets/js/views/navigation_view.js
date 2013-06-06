/*globals App*/
// #= require 'base_model_view'
// #= require 'navigation_list_view'

(function(app) {
  "use strict";

  var views = app.Views;
  var NavigationListView = views.NavigationList;

  views.Navigation = views.Model.extend({

    template: window.JadeTemplates['templates/navigation'],

    el: 'nav#nav',

    events: {
      'click .profile a': 'profile'
    },

    render: function() {
      views.Navigation.__super__.render.call(this);
      var items = this.model.get('items');
      this.renderItems(items);
      return this;
    },

    renderItems: function(items) {
      var view = new NavigationListView({ collection: items });
      this.$el.append(view.render().el);
      this.views.push(view);
      return this;
    },

    profile: function() {
      return this.sendEvent('gotoProfile');
    }

  });

})(App);