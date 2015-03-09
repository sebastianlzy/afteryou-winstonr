/**
 * Created by sebastianlee on 1/19/15.
 */
/*global module, require, console */
(function () {
  'use strict';
  var jobs, areaservices, uristring, db, jobList, mongojs;
  mongojs = require('mongojs');
  uristring = 'mongodb://localhost/winstonr';
  db = mongojs(uristring);
  jobList = {
    "count": 6,
    "next": null,
    "previous": null,
    "results": [
      {
        "id": 12,
        "status": "scheduled",
        "address": {
          "id": 77,
          "name": "Home",
          "block_number": "115",
          "street_name": "Ho ching road",
          "unit_number": "17-104",
          "postal_code": 610115,
          "room_count": "[{u'position': 1, u'type': u'Living Room', u'id': 1, u'default_number': 1}, {u'position': 1, u'type': u'Bedroom', u'id': 2, u'default_number': 3}, {u'position': 1, u'type': u'Kitchen', u'id': 3, u'default_number': 1}, {u'position': 1, u'type': u'Balcony/Patio', u'id': 5, u'default_number': 1}, {u'position': 1, u'type': u'Store Room', u'id': 6, u'default_number': 0}, {u'position': 1, u'type': u'Bathroom', u'id': 4, u'default_number': 2}]",
          "square_feet": 1150,
          "home_type": "Unknown",
          "owner": null,
          "agent": 1
        },
        "selected_datetime": "2015-01-12T10:36:36.705980Z",
        "open_for_winston": false,
        "service_manager": null,
        "user": null,
        "agent": 1
      },
      {
        "id": 16,
        "status": "completed",
        "address": {
          "id": 77,
          "name": "Home",
          "block_number": "115",
          "street_name": "Ho ching road",
          "unit_number": "17-104",
          "postal_code": 610115,
          "room_count": "[{u'position': 1, u'type': u'Living Room', u'id': 1, u'default_number': 1}, {u'position': 1, u'type': u'Bedroom', u'id': 2, u'default_number': 3}, {u'position': 1, u'type': u'Kitchen', u'id': 3, u'default_number': 1}, {u'position': 1, u'type': u'Balcony/Patio', u'id': 5, u'default_number': 1}, {u'position': 1, u'type': u'Store Room', u'id': 6, u'default_number': 0}, {u'position': 1, u'type': u'Bathroom', u'id': 4, u'default_number': 2}]",
          "square_feet": 1150,
          "home_type": "Unknown",
          "owner": null,
          "agent": 1
        },
        "selected_datetime": "2015-01-12T10:36:27.967011Z",
        "open_for_winston": false,
        "service_manager": null,
        "user": null,
        "agent": 1
      },
      {
        "id": 15,
        "status": "completed",
        "address": {
          "id": 77,
          "name": "Home",
          "block_number": "115",
          "street_name": "Ho ching road",
          "unit_number": "17-104",
          "postal_code": 610115,
          "room_count": "[{u'position': 1, u'type': u'Living Room', u'id': 1, u'default_number': 1}, {u'position': 1, u'type': u'Bedroom', u'id': 2, u'default_number': 3}, {u'position': 1, u'type': u'Kitchen', u'id': 3, u'default_number': 1}, {u'position': 1, u'type': u'Balcony/Patio', u'id': 5, u'default_number': 1}, {u'position': 1, u'type': u'Store Room', u'id': 6, u'default_number': 0}, {u'position': 1, u'type': u'Bathroom', u'id': 4, u'default_number': 2}]",
          "square_feet": 1150,
          "home_type": "Unknown",
          "owner": null,
          "agent": 1
        },
        "selected_datetime": "2015-01-12T10:35:27.690201Z",
        "open_for_winston": false,
        "service_manager": null,
        "user": null,
        "agent": 1
      }
    ]
  };
  areaservices = [
    {
      "id": 57,
      "room": "Living Room 1",
      "area": "Air Conditioner",
      "issue": {
        "id": 57,
        "template_issue": {
          "id": 186,
          "name": "Air is too cold",
          "status": "damaged",
          "quotation_required": true,
          "additional_instructions": "these are some instructions",
          "template_area": 11
        },
        "remarks": "",
        "client_image_id": "1421058229114",
        "image_count": 0
      },
      "service_images": [],
      "service_solution": {
        "id": 84,
        "unit_price": 30,
        "contractor_price": 40,
        "name": "Air Con Servicing",
        "service_scheduled_date": "22/02/2015",
        "service_scheduled_time": "15:00",
        "unit": "per unit",
        "quantity": 1,
        "description": "Air con pipe choked",
        "selected": true,
        "selected_datetime": "2015-01-12T10:24:52.893244Z",
        "optional": false,
        "quoted": false,
        "au_status": "To be scheduled",
        "customer_status": "pending",
        "solution": 2,
        "area_service": 57
      },
      "user_changeable": false,
      "user_data_remarks": "",
      "contractor_quotation_received": false,
      "requires_quotation": true,
      "service_provider_selected": false,
      "selected": true,
      "selected_datetime": "2015-01-12T10:24:52.898079Z",
      "description": "Air con leaking like nobody businesses",
      "service_report": 37,
      "job": 12
    },
    {
      "id": 58,
      "room": "Bedroom 1",
      "area": "Lights",
      "issue": {
        "id": 23,
        "template_issue": {
          "id": 133,
          "name": "Light not able to turn on",
          "status": "damaged",
          "quotation_required": true,
          "additional_instructions": "these are some instructions",
          "template_area": 11
        },
        "remarks": "",
        "client_image_id": "1421058229114",
        "image_count": 0
      },
      "service_images": [{ image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg" }, { image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg" }],
      "service_solution": {
        "id": 83,
        "unit_price": 16,
        "contractor_price": 20,
        "name": "Change light bulb",
        "service_scheduled_date": "22/03/2015",
        "service_scheduled_time": "15:00",
        "unit": "each",
        "quantity": 3,
        "description": "16 Watt light bulb change",
        "selected": true,
        "selected_datetime": "2015-01-12T10:24:52.893244Z",
        "optional": false,
        "quoted": false,
        "au_status": "To be scheduled",
        "customer_status": "pending",
        "solution": 2,
        "area_service": 57
      },
      "user_changeable": false,
      "user_data_remarks": "",
      "contractor_quotation_received": false,
      "requires_quotation": true,
      "service_provider_selected": false,
      "selected": true,
      "selected_datetime": "2015-01-12T10:24:52.898079Z",
      "description": "Light flickering",
      "service_report": 37,
      "job": 12
    }];
  jobs = [{
    "id": 12,
    "area_services": areaservices,
    "aircons": [
      {
        "id": 5,
        "price": null,
        "service_type": "aircon",
        "service_scheduled_date": null,
        "service_scheduled_time": null,
        "user_changeable": false,
        "user_data_remarks": "",
        "requires_quotation": true,
        "selected": true,
        "selected_datetime": "2015-02-12T06:26:46.582235Z",
        "unit": "",
        "remarks": "these are some remarks from the agent",
        "description": "",
        "brand": "",
        "system_model": "system 3",
        "aircon_type": "non-inverter",
        "quantity": 1,
        "general_servicing": true,
        "chemical_cleaning": false,
        "requires_troubleshooting": true,
        "requires_gas_topup": true,
        "installation": false,
        "customer_status": "pending",
        "au_status": "To be scheduled",
        "service_report": 71,
        "job": 12
      }
    ],
    "carpets": [{
      "id": 16,
      "price": 200,
      "service_type": "carpets",
      "service_scheduled_date": "Sat, 24/01",
      "service_scheduled_time": "12:15 PM",
      "user_changeable": false,
      "user_data_remarks": "some other things",
      "requires_quotation": false,
      "selected": true,
      "selected_datetime": "2015-01-12T10:36:27.998771Z",
      "unit": "",
      "remarks": "",
      "description": "",
      "quantity": 1,
      "material": "Nylon carpet",
      "thickness": "",
      "which_site": "",
      "dimension_x": 12,
      "dimension_y": 4,
      "dimension_unit": "feet",
      "customer_status": "scheduled",
      "au_status": "Pick up scheduled",
      "service_report": 38,
      "job": 12
    }],
    "curtains": [{
      "id": 17,
      "price": 10,
      "service_type": "curtains",
      "service_scheduled_date": null,
      "service_scheduled_time": null,
      "user_changeable": false,
      "user_data_remarks": "",
      "requires_quotation": false,
      "selected": true,
      "selected_datetime": "2015-02-11T02:40:21.473083Z",
      "unit": "per kg",
      "remarks": "requires scaffolding",
      "description": "Only wash those in living room",
      "type": "Night curtain",
      "quantity": 4,
      "height": "7",
      "sets": 3,
      "which_site": "offsite",
      "requires_hanging": true,
      "requires_scaffolding": true,
      "customer_status": "pending",
      "au_status": "To be scheduled",
      "service_report": 66,
      "job": 23
    },
      {
        "id": 18,
        "price": 4,
        "service_type": "curtains",
        "service_scheduled_date": "22/02/2015",
        "service_scheduled_time": "16:00",
        "user_changeable": false,
        "user_data_remarks": "",
        "requires_quotation": false,
        "selected": true,
        "selected_datetime": "2015-02-11T02:40:21.483158Z",
        "unit": "per kg",
        "remarks": "",
        "description": "Only wash those in living room",
        "type": "Day curtain",
        "quantity": 4,
        "height": "",
        "sets": 3,
        "which_site": "offsite",
        "requires_hanging": true,
        "requires_scaffolding": false,
        "customer_status": "pending",
        "au_status": "Scheduled",
        "service_report": 66,
        "job": 23
      }],
    "cleaning": [{
      "id": 25,
      "price": 200,
      "service_type": "cleaning",
      "service_scheduled_date": null,
      "service_scheduled_time": null,
      "user_changeable": false,
      "user_data_remarks": "",
      "requires_quotation": false,
      "selected": true,
      "selected_datetime": "2015-02-11T02:31:10.655360Z",
      "unit": "",
      "remarks": "these are the remarks for this job",
      "description": "Need to clean microwave oven",
      "name": "",
      "type_of_cleaning": "basic cleaning",
      "number_of_hours": "14.00",
      "requires_equipment": true,
      "requires_ladder": true,
      "house_condition": "fully furnished",
      "customer_status": "pending",
      "au_status": "To be scheduled",
      "service_report": 64,
      "job": 19
    },
      {
        "id": 25,
        "price": 200,
        "service_type": "cleaning",
        "service_scheduled_date": "20/02/2016",
        "service_scheduled_time": "whole day",
        "user_changeable": false,
        "user_data_remarks": "",
        "requires_quotation": false,
        "selected": true,
        "selected_datetime": "2015-02-11T02:31:10.655360Z",
        "unit": "",
        "remarks": "these are the remarks for this job",
        "description": "tenant will be out the whole day",
        "name": "",
        "type_of_cleaning": "spring cleaning",
        "number_of_hours": "14.00",
        "requires_equipment": true,
        "requires_ladder": true,
        "house_condition": "fully furnished",
        "customer_status": "pending",
        "au_status": "Scheduled",
        "service_report": 64,
        "job": 19
      }],
    "address": {
      "id": 77,
      "name": "Home",
      "block_number": "115",
      "street_name": "Ho ching road",
      "unit_number": "17-104",
      "postal_code": 610115,
      "room_count": "[{u'position': 1, u'type': u'Living Room', u'id': 1, u'default_number': 1}, {u'position': 1, u'type': u'Bedroom', u'id': 2, u'default_number': 3}, {u'position': 1, u'type': u'Kitchen', u'id': 3, u'default_number': 1}, {u'position': 1, u'type': u'Balcony/Patio', u'id': 5, u'default_number': 1}, {u'position': 1, u'type': u'Store Room', u'id': 6, u'default_number': 0}, {u'position': 1, u'type': u'Bathroom', u'id': 4, u'default_number': 2}]",
      "square_feet": 1150,
      "home_type": "Unknown",
      "owner": null,
      "agent": 1
    },
    "preferred_slots": [
      //{
      //  "time": "12:11",
      //  "date": "12/11/2014",
      //  "remarks": "Hello"
      //}
    ],
    "agent": {
      "id": 1,
      "full_name": "Deepan Bala",
      "email": "blinduck@gmail.com",
      "mobile_number": "+6598164254",
      "company_name": "AfterYou",
      "cea": "none",
      "account_approved": true,
      "referral_from": "",
      "created_date": "2015-01-08T03:58:43.819556Z",
      "user": 1
    },
    "selected_datetime": "2015-01-12T10:24:52.882493Z",
    "open_for_winston": false,
    "service_manager": null,
    "user": null
  }];

  module.exports.getJobs = function (id) {
    //db.collection('quotations').find(function (err, docs) {
    //  console.log(docs);
    //});
    if (+id) {
      var found_job = {};
      jobs.forEach(function (job) {
        if (job.id === +id) {
          found_job = job;

        }
      });
      return found_job;
    }
    return jobList;
  };
  module.exports.putJobs = function (id, _job) {
    if (+id) {
      //jobs.forEach(function (quote) {
      //  if (quote.id === +id) {
      //    jobs.areaservices.forEach(function (areaservice) {
      //      areaservice.solutions.forEach(function (solution) {
      //        if (solution.quotations[0].viewing_required || (solution.quotations[0].material_cost * solution.quotations[0].labour_cost > 0)) {
      //          solution.quotations[0].quoted = true;
      //        }
      //      });
      //    });
      //  }
      //});
      _job.status = "completed";
      jobs.push(_job);
      return _job;
    }
  };
}());