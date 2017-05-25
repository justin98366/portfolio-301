'use strict'
var app = app || {};

(function(module){
  function Project (projectData){
    this.name = projectData.name;
    this.picture = projectData.picture;
    this.link = projectData.link;
    this.description = projectData.description;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    let template = $('#article-template').html();
    let templateRender = Handlebars.compile(template);
    return templateRender(this);
  };
  Project.loadAll = function(rawData){

    Project.all = rawData.map(function(projectObject){
      return new Project(projectObject);
    })

    console.log(`My descriptions combined make up ${Project.all.map(function(project){
      return project.description.split(' ').length;
    }).reduce(function(acc, curr){
      return acc + curr;
    })} words total`);

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
          projectView.initPage();

        },
        function(err){
          console.log(err);
        })

    }
  }

  app.Project = Project;
})(app)
