'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.projectPageInit = function() {
    app.Project.fetchAll(app.projectView.initPage);
    $('main > section').hide();
    $('#articles').show();

  }

  module.projectController = projectController;
}(app))
