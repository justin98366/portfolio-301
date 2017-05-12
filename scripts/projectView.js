'use strict'

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:eq(1)').click();
};

$(document).ready(function() {projectView.handleMainNav()});
