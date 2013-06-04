/*globals App*/
// #= require 'base_collection_view'
// #= require 'navigation_item_view'

(function(app) {
  "use strict";

  var views = app.Views;
  var NavigationItemView = views.NavigationItem;

  views.NavigationList = views.Collection.extend({

    tagName: 'ul',

    renderModel: function(navItem) {
      var view = new NavigationItemView({ model: navItem });
      this.$el.append(view.render().el);
      this.views.push(view);
      return this;
    }

  });

})(App);