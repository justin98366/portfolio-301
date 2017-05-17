'use strict'
//take this off global scope -- Matt
// var projects = [];

function Project (projectData){
  this.name = projectData.name;
  this.picture = projectData.picture;
  this.link = projectData.link;
  this.description = projectData.description;
}

Project.all = [];
//change var to let -- Matt
Project.prototype.toHtml = function() {
  let template = $('#article-template').html();
  let templateRender = Handlebars.compile(template);
  return templateRender(this);
};
Project.loadAll = function(rawData){

  rawData.forEach(function(projectObject) {
    Project.all.push(new Project(projectObject));
  })

}

Project.fetchAll = function() {
  if (localStorage.rawData) {

    Project.loadAll(JSON.parse(localStorage.rawData));

    projectView.initPage(localStorage.rawData);
  } else {

    $.getJSON('./data/projectInfo.json')
      .then(function(data){
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(data);

      },
      function(err){
        console.log(err);
      })
    projectView.initPage();
  }
}
