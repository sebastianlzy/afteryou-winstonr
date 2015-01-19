/*global require, console */
(function () {
    'use strict';
    var Hapi, Good, _request, _, prettyjson,
      server, getPath, postPath, putPath,
      getListings, logRequest;
    Hapi = require('hapi');
    Good = require('good');
    _request = require('request');
    _ = require('lodash');
    prettyjson = require('prettyjson');
    server = Hapi.createServer('0.0.0.0', 3004,
        {
            json: {space: 2},
            cors: true,
            router: {stripTrailingSlash: true}
        });
    //REST
    getPath = function (path, handler) {
        server.route({
            method: 'GET',
            path: path,
            handler: handler

        });

    };
    postPath = function (path, handler) {
        server.route({
            method: 'POST',
            path: path,
            handler: handler
        });
    };
    putPath = function (path, handler) {
        server.route({
            method: 'PUT',
            path: path,
            handler: handler
        });
    };
    //Service Reports
    getListings = function (request, reply) {
        var listings = [
            {
                "listing_id" : 1,
                "owner": null,
                "agent": 1,
                "name": "Parc Oasis",
                "block_number": "172",
                "street_name": "Bukit Batok West Ave 8",
                "unit_number": "#12-345",
                "postal_code": 650172,
                "square_feet": 1444,
                "home_type": "Unknown",
                "tenant_info": {
                    "name" : "Sebastian Lee",
                    "contact_number" : 91883844,
                    "email_address" : "leezhenyang@afteryou.co",
                    "remarks" : "Will be away from 25 Dec - 1 Jan"
                },
                "landlord_info":{
                    "name" : "Deepan Bala",
                    "contact_number" : 91883844,
                    "email_address" : "deepan@afteryou.co",
                    "remarks" : "For urgent matter, call his wife @ 92334212"  
                }

            },
            {
                "listing_id": 2,
                "owner": null,
                "agent": 1,
                "name": "Parc Vista",
                "block_number": "142",
                "street_name": "Bukit Batok Central 1",
                "unit_number": "#08-88",
                "postal_code": 650142,
                "square_feet": 1323,
                "home_type": "Unknown",
                "tenant_info": {
                    "name" : "Sebastian Lee",
                    "contact_number" : 91883844,
                    "email_address" : "leezhenyang@afteryou.co",
                    "remarks" : "Will be away from 25 Dec - 1 Jan"
                },
                "landlord_info":{
                    "name" : "Yaowen",
                    "contact_number" : 91883844,
                    "email_address" : "yaowen@afteryou.co",
                    "remarks" : "For urgent matter, call his wife @ 92334212"  
                }

            }
        ]
        var id = encodeURIComponent(request.params.id);
        
        if(id !== "undefined"){            
            var listing = _.find(listings,{"listing_id": +id});
            reply(listing);
        }else{

            reply(listings);
        }
        
    };

//POST
    logRequest = function (request, request_name) {
        request_name = request_name || "DEBUG";
        var payload = request.payload;
        console.log('============================ ' + request_name + ' ==========================')
        console.log(prettyjson.render(payload));
    };
    getPath("/sm_app/listings", getListings);
    getPath("/sm_app/listings/{id}", getListings);

    server.pack.register(Good, function (err) {
        if (err) {
            throw err; // something bad happened loading the plugin
        }

        server.start(function () {
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    });


}());