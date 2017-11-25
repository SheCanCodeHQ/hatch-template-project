/**
 * Created by florin on 25/11/2017.
 */
var express = require('express');
var app = express();
var path = require('path');

//serves some static files
app.use(express.static(path.join(__dirname, 'docs')));

app.listen(8080);