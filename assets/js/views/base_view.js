window.SH.BaseView = window.Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  close: function() {
    this.remove();
    this.unbind();
    this.undelegateEvents();
  }

});