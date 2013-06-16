/*globals App*/
// #= require '../models/navigation_model'
// #= require '../models/navigation_item_model'
// #= require '../collections/navigation_item_collection'

(function(app) {

  var controllers = app.Controllers;
  var Navigation = app.Models.Navigation;
  var NavItems = app.Collections.NavigationItems;

  controllers.Navigation = {

    model: null,

    profile: null,

    items: null,

    getNavigationModel: function() {
      if (this.model === null) this.model = new Navigation();

      if (this.profile !== null) {
        this.model.set('displayName', this.profile.get('displayName'));
        this.model.set('facebookId', this.profile.get('facebookId'));
      }

      this.model.set('items', this.getItems());

      return this.model;
    },

    _setActiveState: function(title, isActive) {
      if (this.items === null) return;

      var item = this.items.findWhere({ title: title });
      if (item) item.set('isActive', isActive);
    },

    selectItem: function(title) { this._setActiveState(title, true); },

    deselectItem: function(title) { this._setActiveState(title, false); },

    deselectItems: function() { 
      if (this.items === null) return;
      this.items.forEach(function(item) { item.set('isActive', false); });
    },

    getItems: function() {
      if (this.items) return this.items;

      return this.items = new NavItems([
        { title: 'Home', cssClass: 'dashboard', icon: 'icon-home', url: '/' },
        { title: 'Teams', cssClass: 'teams', icon: 'icon-group', url: '/teams' },
        { title: 'Events', cssClass: 'events', icon: 'icon-calendar', url: '/events' },
        { title: 'Logout', cssClass: 'logout', icon: 'icon-off', url: '/logout' }
      ]);
    }

  };

})(App);