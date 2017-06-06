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
    let template = Handlebars.compile($('#article-template').text());

    return template(this);
  };
  Project.loadAll = function(rawData){

    Project.all = rawData.map(function(projectObject){
      return new Project(projectObject);
    })

    // console.log(`My descriptions combined make up ${Project.all.map(function(project){
    //   return project.description.split(' ').length;
    // }).reduce(function(acc, curr){
    //   return acc + curr;
    // })} words total`);

  }

  Project.fetchAll = function() {
    localStorage.clear();
    if (localStorage.rawData) {


      Project.loadAll(JSON.parse(localStorage.rawData));

      app.projectView.initPage();
    } else {

      $.getJSON('./data/projectInfo.json')
        .then(function(data){
          Project.loadAll(data);
          localStorage.rawData = JSON.stringify(data);
          app.projectView.initPage();

        },
        function(err){
          console.log(err);
        })

    }
  }

  module.Project = Project;
})(app)
