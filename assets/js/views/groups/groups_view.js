/*globals App*/
// #= require '../base_collection_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.Groups = views.Collection.extend({

    template: window.JadeTemplates['templates/groups/list'],

    tagName: 'ul',

    className: 'groups',

    renderModel: function(group) {
      var view = new views.Group({ model: group });
      this.$el.append(view.render().el);
      this.views.push(view);
    }

  });

})(App);