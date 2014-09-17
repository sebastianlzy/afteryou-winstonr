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

var format_issue_tarray = function(templates){

  var formatted_templates = [];
  for(i = 0 ;i < templates.length; i ++){
    formatted_templates.push({id: i, name : templates[i],status : 'damaged'});
  }
  formatted_templates.push({id : templates.length ,name : 'dirty' , status : 'dirty'})
  return formatted_templates
}

var format_return_value = function(values_array,id){
  if(_.isEmpty(id) || id === 'undefined'){
    return values_array
  }else{
    return _.find(values_array,{'id' : parseInt(id)})
  }
}


var rooms = function(id){
  var rooms_name = [ "bathroom","bedroom", "living_room","kitchen"];
  var rooms = format_template_array(rooms_name);
  return format_return_value(rooms,id)
}

var roomWithAreas = function(name){
  var roomsWithAreas =
  {
    bathroom : format_template_array(["lighting", "tap", "toilet_bowl", "drain", "wash_basin", "piping", "water_heater", "bath_tub", "flooring", "door", "bath_cubicle", "wall_paint"]),
    bedroom : format_template_array(["air_conditioner", "wall_paint", "curtains", "window", "door", "flooring", "fan", "power_outlets", "lighting"]),
    living_room : format_template_array(["air_conditioner", "wall_paint", "curtains", "window", "flooring", "fan", "power_outlets", "lighting"]),
    kitchen : format_template_array(["lighting", "power_outlets", "fume_cupboard", "tap", "wash_basin", "flooring", "door", "window", "stove", "wall_paint"])
  }
  return roomsWithAreas[name];

}

var areas = function(id){

  var areas_name = ["air_conditioner", "bath_tub", "wall_paint", "stove", "bath_cubicle", "curtains", "window", "door", "flooring", "water_heater", "piping", "wash_basin", "drain", "toilet_bowl", "tap", "alarm_systems", "cable_line", "phone_line", "fume_cupboard", "fan", "power_outlets", "lighting", "others"];
  var areas = format_template_array(areas_name);
  return format_return_value(areas,id)

}

var areaWithIssues = function(name){
  var areaWithIssues =
  {
    air_conditioner : format_issue_tarray(['air_not_cold',"leaking"]),
    bath_tub : format_issue_tarray(["chipped","leaking"]),
    wall_paint : format_issue_tarray(["chipped"]),
    stove : format_issue_tarray(["gas_leakage"]),
    bath_cubicle : format_issue_tarray(["cracks","faulty_door"]),
    curtains : format_issue_tarray(["faulty_sliding_mechanism","faulty_close_open_mechanism"]),
    'window' : format_issue_tarray(["faulty_sliding_mechanism","faulty_hinge"]),
    flooring : format_issue_tarray(["faulty_hinge","faulty_sliding_mechanism","chipped"]),
    water_heater : format_issue_tarray(["high_pitched_whining"]),
    piping : format_issue_tarray(["clogged"]),
    wash_basin : format_issue_tarray(["clogged"]),
    toilet_bowl : format_issue_tarray(["clogged"]),
    tap : format_issue_tarray(["clogged"]),
    alarm_systems : format_issue_tarray(["failure_to_detect"]),
    cable_line : format_issue_tarray(["no_internet_connection"]),
    phone_line : format_issue_tarray(["no_phone_connection"]),
    fume_cupboard : format_issue_tarray(["unable_to_turn_on"]),
    fan : format_issue_tarray(["unable_to_turn_on"]),
    power_outlets : format_issue_tarray(["unable_to_turn_on"]),
    lighting : format_issue_tarray(["unable_to_turn_on"]),
    others : format_issue_tarray(["others"])


  }
  return areaWithIssues[name];

}

var services = function(id){
  var services_name = ["spring_cleaning","tidying","shinning"];
  var services = format_template_array(services_name);
  return format_return_value(services,id)
}

var getAreas = function (request, reply) {
    reply(areas(encodeURIComponent(request.params.id)));
}

var getAreaWithIssues = function (request, reply) {
    var area = areas(encodeURIComponent(request.params.id));
    reply(areaWithIssues(area.name));
}

var getRooms = function (request, reply) {
    reply(rooms(encodeURIComponent(request.params.id)));
}

var getRoomWithAreas = function (request, reply) {
    var room = rooms(encodeURIComponent(request.params.id));
    reply(roomWithAreas(room.name));
}

var getServices = function (request, reply) {
    reply(services(encodeURIComponent(request.params.id)));
}



getPath("/areas/{id?}",getAreas);
getPath("/areas/{id}/issues",getAreaWithIssues);
getPath("/rooms/{id?}",getRooms);
getPath("/rooms/{id}/areas",getRoomWithAreas);
getPath("/services/{id?}",getServices);







server.pack.register(Good, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
