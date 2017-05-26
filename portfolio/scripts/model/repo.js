
'use strict';

$.get('/github/user/repos')
.then(
  data => {
    data.forEach(repo => $('#about').append(`<p>${repo.name}</p>`))
  }
);
