'use strict'
//take this off global scope -- Matt
var projects = [];

function Project (projectData){
  this.name = projectData.name;
  this.picture = projectData.picture;
  this.link = projectData.link;
  this.description = projectData.description;
}
//change var to let -- Matt
Project.prototype.toHtml = function() {
  let template = $('#article-template').html();
  let templateRender = Handlebars.compile(template);
  return templateRender(this);
};

projectInfo.forEach(function(articleObject) {
  projects.push(new Project(articleObject));
});

projects.forEach(function(article){
  $('#articles').append(article.toHtml());
});
