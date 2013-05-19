(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  window.SH.BaseView = window.Backbone.View.extend({

    initialize: function() {
      this.views = [];
    },

    render: function() {
      var data = this.model ? this.model.toJSON() : {};
      this.$el.html(this.template(data));
      return this;
    },

    sendEvent: function(event) {
      sc.sendEvent(event);
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