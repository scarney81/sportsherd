/*globals Backbone*/
window.Sportsherd.LoginView = Backbone.View.extend({

  template: window.JadeTemplates['templates/login'],

  el: '.container',

  events: {
    'click #login': 'login'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  login: function() {
    window.Sportsherd.statechart.sendEvent('login');
  }
});