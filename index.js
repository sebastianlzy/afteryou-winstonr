/*global require, console */
(function () {
  'use strict';
  var Hapi, Good, _, prettyjson,
    uristring, mongojs, db,
    _quotations, _jobs, _accepted_jobs,
    server, getPath, postPath, putPath,
    getListings, logRequest, getQuotes;
  Hapi = require('hapi');
  Good = require('good');

  //mongoose = require("mongoose");
  //Schema = mongoose.Schema;
  //_request = require('request');
  _ = require('lodash');
  prettyjson = require('prettyjson');
  _quotations = require('./quotations');
  _jobs = require('./jobs');
  _accepted_jobs = require("./accepted-jobs");

  server = Hapi.createServer('0.0.0.0', 3004,
    {
      json: { space: 2 },
      cors: true,
      router: { stripTrailingSlash: true }
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
        "listing_id": 1,
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
          "name": "Sebastian Lee",
          "contact_number": 91883844,
          "email_address": "leezhenyang@afteryou.co",
          "remarks": "Will be away from 25 Dec - 1 Jan"
        },
        "landlord_info": {
          "name": "Deepan Bala",
          "contact_number": 91883844,
          "email_address": "deepan@afteryou.co",
          "remarks": "For urgent matter, call his wife @ 92334212"
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
          "name": "Sebastian Lee",
          "contact_number": 91883844,
          "email_address": "leezhenyang@afteryou.co",
          "remarks": "Will be away from 25 Dec - 1 Jan"
        },
        "landlord_info": {
          "name": "Yaowen",
          "contact_number": 91883844,
          "email_address": "yaowen@afteryou.co",
          "remarks": "For urgent matter, call his wife @ 92334212"
        }

      }
    ]
    var id = encodeURIComponent(request.params.id);

    if (id !== "undefined") {
      var listing = _.find(listings, { "listing_id": +id });
      reply(listing);
    } else {

      reply(listings);
    }

  };
  getQuotes = function (request, reply) {
    logRequest({payload: request.params}, "Get Quotes");
    var quote = _quotations.getQuotes(encodeURIComponent(request.params.id));
    console.log(request);
    reply(quote);
  };
  getPath("/julia/api/quote_jobs/{id?}", getQuotes);
  getPath("/sm_app/listings/{id?}", getListings);
  getPath("/julia/api/accepted_jobs/{id?}", function (request, reply) {
    logRequest({payload: request.params}, "Get Accepted Jobs");
    var accepted_jobs = _accepted_jobs.getJobs(encodeURIComponent(request.params.id));
    reply(accepted_jobs);
  });
  getPath("/julia/api/jobs/{id?}", function (request, reply) {
    logRequest({payload: request.params}, "Get Jobs");
    var jobs = _jobs.getJobs(encodeURIComponent(request.params.id));
    reply(jobs);
  });
//POST
  logRequest = function (request, request_name) {
    request_name = request_name || "DEBUG";
    var payload = request.payload;
    console.log('============================ ' + request_name + ' ==========================')
    console.log(prettyjson.render(payload));
  };
  putPath("/julia/api/accepted_job/{id?}", function (request, reply) {
    logRequest(request, "Completed Jobs");
    //QuotationSchema = new Schema({id: String}, { strict: false });
    //Quotation = mongoose.model('Quotation', QuotationSchema);
    //quotation = new Quotation(result);
    //quotation.save();
    reply("Accepted");
  });
  putPath("/julia/api/quote_jobs/{id?}", function (request, reply) {
    var result, Quotation, quotation, QuotationSchema;
    logRequest(request, "Put Quotes");
    result = _quotations.putQuotes(request.payload.id, request.payload);
    //QuotationSchema = new Schema({id: String}, { strict: false });
    //Quotation = mongoose.model('Quotation', QuotationSchema);
    //quotation = new Quotation(result);
    //quotation.save();
    reply(result);
  });
  putPath("/julia/api/jobs/{id?}", function (request, reply) {
    var result;
    logRequest(request, "Put Quotes");
    result = _jobs.putJobs(request.payload.id, request.payload);
    reply(result);
  });
  putPath("/julia/api/accepted_jobs/{id?}", function (request, reply) {
    var result;
    logRequest(request, "Put Quotes");
    result = _accepted_jobs.putJobs(request.payload.id, request.payload);
    reply(result);
  });
  postPath("/api/login", function (request, reply) {
    var payload = request.payload;
    logRequest(request, 'login');
    if (payload.username === 'sebastian@afteryou.co' && payload.password === 'password') {
      reply({ user_id: 123, full_name: "sebastian lee", token: "083f1b280baad0f1cd0b53dc759d433de0a687ectest" });
    } else {
      reply(Hapi.error.badRequest('Invalid Credential'));
    }
  });

  postPath("/julia/api/notification_token", function (request, reply) {
    logRequest(request, 'register token');
    reply("Successfully registered");

  });

  server.pack.register(Good, function (err) {
    if (err) {
      throw err; // something bad happened loading the plugin
    }

    server.start(function () {
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });

}());