(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  window.SH.BaseView = window.Backbone.View.extend({

    initialize: function() {
      this.views = [];
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    sendEvent: function(event) {
      sc.sendEvent(event);
      return this;
    },

    // over-ride base remove function
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    close: function() {
      this.remove();
      this.unbind();
      this.undelegateEvents();

      if (this.views && this.views.length) {
        this.views.forEach(function(view) {
          if (view.close) view.close();
        });
      }

      return this;
    }

  });

})();