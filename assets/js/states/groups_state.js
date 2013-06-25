/*globals App*/
// #= require '../controllers/groups_controller'
// #= require '../models/group_model'
// #= require '../views/groups/new_group_view'

(function(app) {
  'use strict';

  var sc = app.Statechart;
  var groupController = app.Controllers.Groups;
  var Group = app.Models.Group;
  var GroupView = app.Views.NewGroup;

  sc.addState('groups', {
    parentState: 'application'
  });

  sc.addState('groups-new', {

    parentState: 'groups',

    enterState: function() {
      var view = new GroupView({ model: new Group() });
      $('.content').html(view.render().el);
      this.setData('view', view);
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.close();
    },

    saveGroup: function(group) {
      var that = this;
      var success = function() { that.goToState('group-created'); };
      var failure = function() { that.goToState('group-notCreated'); };
      groupController.createGroup(group, success, failure);
    },

    states: [
      {
        name: 'group-created',

        enterState: function() {
          var view = this.getData('view');
          view.showSuccessMessage();
        },

        exitState: function() {
          var view = this.getData('view');
          view.hideSuccessMessage();
        }
      },
      {
        name: 'group-notCreated',

        enterState: function() {
          var view = this.getData('view');
          view.showFailureMessage();
        },

        exitState: function() {
          var view = this.getData('view');
          view.hideFailureMessage();
        }
      }
    ]

  });

})(App);