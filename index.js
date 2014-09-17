var Hapi = require('hapi');
var Good = require('good');
var gulp = require('gulp');
var _ = require('lodash');






var server = Hapi.createServer('localhost', 3000, { json: {space:2} });


var getPath = function(path,handler){

  server.route({
      method: 'GET',
      path: path,
      handler: handler

  });

}

var areas = function(id){

  var areas_name = ["air_conditioner", "bath_tub", "wall_paint", "stove", "bath_cubicle", "curtains", "window", "door", "flooring", "water_heater", "piping", "wash_basin", "drain", "toilet_bowl", "tap", "alarm_systems", "cable_line", "phone_line", "fume_cupboard", "fan", "power_outlets", "lighting", "others"]
  var areas = [];
  for(i = 0 ;i < areas_name.length; i ++){
    areas.push({id: i, name : areas_name[i]});
  }

  if(_.isEmpty(id)){
    return areas
  }else{
    console.log(id)

    return _.find(areas,{'id' : parseInt(id)})
  }



}


var getAreas = function (request, reply) {
    reply(areas());
  }

var getAreasWithParams = function (request, reply) {
    reply(areas(encodeURIComponent(request.params.id)));
}



getPath("/areas",getAreas);
getPath("/areas/{id}",getAreasWithParams);









server.pack.register(Good, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
