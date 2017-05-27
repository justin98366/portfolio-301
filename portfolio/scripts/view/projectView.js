'use strict'
var app = app || {};

(function(module){
  const projectView = {};

  projectView.initPage = function(){
    $('#articles').empty();
    app.Project.all.forEach(function(project){
      $('#articles').append(project.toHtml());
    })
  }

  module.projectView = projectView;
})(app)
