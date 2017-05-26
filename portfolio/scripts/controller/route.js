'use strict';
var app = app || {};


page('/', app.aboutController.aboutPageInit);
page('/project', app.projectController.projectPageInit);

page();
