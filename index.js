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

var format_template_array = function(templates){

  var formatted_templates = [];
  for(i = 0 ;i < templates.length; i ++){
    formatted_templates.push({id: i, name : templates[i]});
  }
  return formatted_templates
}

var format_return_value = function(values_array,id){
  if(_.isEmpty(id) || id === 'undefined'){
    return values_array
  }else{
    return _.find(values_array,{'id' : parseInt(id)})
  }
}

var areas = function(id){

  var areas_name = ["air_conditioner", "bath_tub", "wall_paint", "stove", "bath_cubicle", "curtains", "window", "door", "flooring", "water_heater", "piping", "wash_basin", "drain", "toilet_bowl", "tap", "alarm_systems", "cable_line", "phone_line", "fume_cupboard", "fan", "power_outlets", "lighting", "others"];
  var areas = format_template_array(areas_name);
  return format_return_value(areas,id)

}


var rooms = function(id){
  var rooms_name = ["bedroom", "living_room", "bathroom", "kitchen"];
  var rooms = format_template_array(rooms_name);
  return format_return_value(rooms,id)
}

var roomWithParams = function(name){
  var roomsWithAreas =
  {
    bathroom : ["lighting", "tap", "toilet_bowl", "drain", "wash_basin", "piping", "water_heater", "bath_tub", "flooring", "door", "bath_cubicle", "wall_paint"],
    bedroom : ["air_conditioner", "wall_paint", "curtains", "window", "door", "flooring", "fan", "power_outlets", "lighting"],
    living_room : ["air_conditioner", "wall_paint", "curtains", "window", "flooring", "fan", "power_outlets", "lighting"],
    kitchen : ["lighting", "power_outlets", "fume_cupboard", "tap", "wash_basin", "flooring", "door", "window", "stove", "wall_paint"]
  }
  return roomsWithAreas[name];

}

var getAreas = function (request, reply) {
    reply(areas(encodeURIComponent(request.params.id)));
}

var getRooms = function (request, reply) {
    reply(rooms(encodeURIComponent(request.params.id)));
}

var getRoomWithAreas = function (request, reply) {
    var room = rooms(encodeURIComponent(request.params.id));
    reply(roomWithParams(room.name));
}



getPath("/areas/{id?}",getAreas);
getPath("/rooms/{id?}",getRooms);
getPath("/rooms/{id}/areas",getRoomWithAreas);







server.pack.register(Good, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
