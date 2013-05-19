// #= require '../base_view'

(function() {

  window.SH.BaseDashboardView = window.SH.BaseView.extend({

    events: {
      'click h3': 'showDashboard'
    },

    showDashboard: function() {
      return this;
    },

    expand: function() {
      this.$el.find('ul').removeClass('hidden');
      return this;
    },

    collapse: function() {
      this.$el.find('ul').addClass('hidden');
      return this;
    }

  });

})();