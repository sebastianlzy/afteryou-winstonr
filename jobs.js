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
        status: "quoted",
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
        "id": 13,
        status: 'pending',
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
        "id": 14,
        status: "pending",
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
        "id": 15,
        status: "pending",
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
        status: "quoted",
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
        "id": 17,
        status: "pending",
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
        "id": 18,
        status: "pending",
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
      },
      {
        "id": 19,
        status: "pending",
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
      },
      {
        "id": 20,
        status: "pending",
        "address": {
          "id": 77,
          "name": "Home",
          "block_number": "172",
          "street_name": "Bukit Batok Ave 8",
          "unit_number": "17-104",
          "postal_code": 650172,
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
      "room": "Living Room, Living Room 1",
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
        "service_scheduled_date": null,
        "service_scheduled_time": null,
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
      "description": "Air con leaking like nobody business",
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
        "service_scheduled_date": null,
        "service_scheduled_time": null,
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
      _job.status = "accepted";
      jobs.push(_job);
      return _job;
    }
  };
}());