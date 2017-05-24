'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.projectPageInit = function() {
    app.Project.fetchAll(projectView.initPage);
    $('.tab-content').hide();
    $('#articles').fadeIn();

  }

  module.projectController = projectController;
}(app))
