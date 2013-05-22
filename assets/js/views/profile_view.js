// #= require 'base_view'

(function(app) {
  "use strict";

  var views = app.Views;
  views.ProfileView = views.Base.extend({

    template: window.JadeTemplates['templates/profile'],

    className: 'profile'

  });

})(window.SH);