var Hapi = require('hapi');
var Good = require('good');
var gulp = require('gulp');







var server = Hapi.createServer('localhost', 3000, { json: {space:2} });


var getPath = function(path,handler){

  server.route({
      method: 'GET',
      path: path,
      handler: handler

  });

}


var helloWorld = function (request, reply) {
    reply('Hello, world!');
  }

var helloWorldWithParams = function (request, reply) {
    reply('Hello1, ' + encodeURIComponent(request.params.name) + '!');
}



getPath("/",helloWorld);
getPath("/{name}",helloWorldWithParams);












server.pack.register(Good, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
