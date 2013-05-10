/*globals Backbone*/
window.Sportsherd.ApplicationView = Backbone.View.extend({

	template: window.JadeTemplates['templates/application'],

	el: '.container',

	render: function(){
		this.$el.html(this.template());
		return this;
	}
});