/*globals Backbone*/
window.Sportsherd.ApplicationView = Backbone.View.extend({

	template: window.JadeTemplates['templates/application'],

	el: '.container',

  events: {
    'click .logout': 'logout'
  },

	render: function() {
		this.$el.html(this.template());
		return this;
	},

  logout: function() {
    window.Sportsherd.statechart.sendEvent('logout');
    return this;
  }
  
});