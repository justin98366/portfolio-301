'use strict'

var projects = [];

function Project (projectData){
  this.name = projectData.name;
  this.picture = projectData.picture;
  this.link = projectData.link;
  this.description = projectData.description;
}

Project.prototype.toHtml = function() {
  var template = $('#article-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

projectInfo.forEach(function(articleObject) {
  projects.push(new Project(articleObject));
});

projects.forEach(function(article){
  $('#articles').append(article.toHtml());
});
