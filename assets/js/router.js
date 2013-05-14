window.Sportsherd.Router = Backbone.Router.extend({
  routes: {
    'events':'login',
    '*route':'default'
  },
  login: function(){
    window.Sportsherd.statechart.sendEvent("login");
  },
  default: function(){
    window.Sportsherd.statechart.sendEvent("default");
  }
});