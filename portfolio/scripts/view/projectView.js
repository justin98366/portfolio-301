'use strict'

const projectView = {};

projectView.initPage = function(){
  app.Project.all.forEach(function(project){
    $('#articles').append(project.toHtml());
  })
}
