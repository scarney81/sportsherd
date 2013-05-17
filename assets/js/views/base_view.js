window.SH.BaseView = window.Backbone.View.extend({

  initialize: function() {
    this.views = [];
  },

  render: function() {
    this.$el.html(this.template());
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
  }

});