var express = require('express')

var options = require('optimist').default({ port: 8888 }).argv

var app = express.createServer(express.static(__dirname + '/.'))
  , logger = app.logger = console

app.listen(options.port, function () {
  logger.log("App Started - Slides available at http://localhost:%d", options.port)
});