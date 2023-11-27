// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.listen(3000, function(){
    console.log('Server Running at http://')
});