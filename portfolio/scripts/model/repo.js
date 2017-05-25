// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM
'use strict';

$.ajax({
  // go get the data
  url:'https://api.github.com/user/repos',
  method:'GET',
  headers: {
    Authorization: `token ${myGitHubToken}`
  }
})
.then(
  // render the data
  data => {
    data.forEach(repo => $('#about').append(`<p>${repo.name}</p>`))
  }
);
