'use strict'

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 4000;
app.use(express.static('./portfolio'));


function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
app.get('*', (request, response) => response.sendFile('index.html', {root: './portfolio'}));
app.listen(PORT, function(){
  console.log('We are on localHost ' + PORT);
});
