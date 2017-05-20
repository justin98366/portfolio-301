'use strict'

const projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:eq(1)').click();
};

// $(document).ready(function() {projectView.handleMainNav()});
projectView.initPage = function(){
  Project.all.forEach(function(article){
    $('#articles').append(article.toHtml());
  })
  projectView.handleMainNav();
}
