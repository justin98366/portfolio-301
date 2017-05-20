'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static('./portfolio'));
app.listen(PORT, function(){
  console.log('We are on localHost ' + PORT);
});
