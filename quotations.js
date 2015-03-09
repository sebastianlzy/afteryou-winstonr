/**
 * Created by sebastianlee on 1/19/15.
 */
/*global module */
var quotes, areaservices, quoteList = {
  "count": 62,
  "next": "http://afteryou.co/julia/api/quote_jobs/?page=2",
  "previous": null,
  "results": [
    {
      "id": 381,
      status: "pending",
      "address": {
        "id": 539,
        "name": "",
        "block_number": "",
        "street_name": "Bukit batok street 11",
        "unit_number": "",
        "postal_code": 650142
      },
      "quoted_service_solution_count": 0,
      "total_service_solution_count": 1,
      "request_submitted_date": "15/01/2015"
    },
    {
      "id": 380,
      status: "quoted",
      "address": {
        "id": 566,
        "name": "",
        "block_number": "15",
        "street_name": "Prince george's park",
        "unit_number": "Basement 1",
        "postal_code": 118430
      },
      "total_service_solution_count": 1,
      "quoted_service_solution_count": 0,
      "request_submitted_date": "15/01/2015"
    },
    {
      "id": 379,
      status: "pending",
      "address": {
        "id": 565,
        "name": "",
        "block_number": "",
        "street_name": "Bukit batok west avenue 8",
        "unit_number": "",
        "postal_code": 650172
      },
      "total_service_solution_count": 4,
      "quoted_service_solution_count": 2,
      "request_submitted_date": "15/01/2015"
    }
  ]
};
areaservices = [{
  "id": 1933,
  "area": {
    "id": 5,
    "name": "Bar Counter"
  },
  "room": {
    "id": 865,
    "name": "Bedroom 1",
    "description": "",
    "template_room": 6
  },
  "issue": {
    "id": 1933,
    "template_issue": {
      "id": 23,
      "name": "Disposal",
      "status": "disposal",
      "quotation_required": true,
      "additional_instructions": "1. Take Photo <br/> 2. Location <br/> 3. Dimensions <br/>",
      "template_area": 5
    },
    "remarks": "",
    "client_image_id": "1421294302598",
    "image_count": 0
  },
  "images": [],
  "solutions": [ {
    "name": "Replace with Ikea Curtains",
    "id": 2,
    "solution": 52,
    "area_service": 1759,
    "unit_price": "150.00",
    "unit": "Per Piece",
    "quantity": 1,
    "description": "",
    "selected": false,
    "quotations": [{
      "id" : 3,
      "quoted": true,
      "service_solution": "2",
      "material_cost": "233",
      "labour_cost": "123",
      "remarks": "Dont do this",
      "viewing_required": false
    }]
  }, {
    "name": "Repair curtain motor",
    "id": 3,
    "solution": 52,
    "area_service": 1759,
    "unit_price": "200.00",
    "unit": "Per Piece",
    "quantity": 1,
    "description": "",
    "selected": false,
    "quotations": [{
      "quoted": true,
      "material_cost": "100",
      "labour_cost": "200",
      "remarks": "Please change this",
      "viewing_required": false
    }]
  }],
  "quotation_fields": [
    "material_cost",
    "labour_cost",
    "remarks",
    "viewing_required"
  ],
  "user_changeable": false,
  "user_data_remarks": "",
  "contractor_quotation_received": false,
  "requires_quotation": true,
  "service_provider_selected": false,
  "selected": true,
  "selected_datetime": "2015-01-15T07:48:42.537940Z",
  "description": "",
  "service_report": 379,
  "job": 15
},
  {
    "id": 1933,
    "area": {
      "id": 5,
      "name": "Water Sink"
    },
    "room": {
      "id": 865,
      "name": "Kitchen 1",
      "description": "",
      "template_room": 6
    },
    "issue": {
      "id": 1933,
      "template_issue": {
        "id": 23,
        "name": "Damaged",
        "status": "damage",
        "quotation_required": true,
        "additional_instructions": "1. Take Photo <br/> 2. Location <br/> 3. Dimensions <br/>",
        "template_area": 5
      },
      "remarks": "The water sink is damaged. The 2 pipes have been corroded",
      "client_image_id": "1421294302598",
      "image_count": 0
    },
    "images": [{id: "2", image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg"}, { image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg", id: "4"}],
    "solutions": [ {
      "name": "Replace the whole sink",
      "id": 4,
      "solution": 52,
      "area_service": 1759,
      "unit_price": "150.00",
      "unit": "Per Piece",
      "quantity": 1,
      "description": "",
      "selected": false,
      "quoted": false,
      "quotations": [
      //  {
      //  "material_cost": "",
      //  "labour_cost": "",
      //  "remarks": "",
      //  "viewing_required": false
      //}
      ]
    }, {
      "name": "Repair leaked pipe",
      "id": 5,
      "solution": 52,
      "area_service": 1759,
      "unit_price": "200.00",
      "unit": "Per Piece",
      "quantity": 1,
      "description": "",
      "selected": false,
      "quoted": false,
      "quotations": [
      //  {
      //  "material_cost": "",
      //  "labour_cost": "",
      //  "remarks": "",
      //  "viewing_required": false
      //}
      ]
    }],
    "quotation_fields": [
      "material_cost",
      "labour_cost",
      "remarks",
      "viewing_required"
    ],
    "user_changeable": false,
    "user_data_remarks": "",
    "contractor_quotation_received": false,
    "requires_quotation": true,
    "service_provider_selected": false,
    "selected": true,
    "selected_datetime": "2015-01-15T07:48:42.537940Z",
    "description": "",
    "service_report": 379,
    "job": 15
  }];
quotes = [{
  "id": 379,
  "areaservices": areaservices,
  "transport_quotations": [{price : 70}]
}];


module.exports.getQuotes = function (id) {
  'use strict';
  if (+id) {
    var found_quote = {};
    quotes.forEach(function (quote) {
      if (quote.id === +id) {
        found_quote = quote;
      }
    });
    return found_quote;
  }
  return quoteList;
};

module.exports.putQuotes = function (id, _quote) {
  'use strict';
  if (+id) {
    quotes.forEach(function (quote) {
      if (quote.id === +id) {
        _quote.areaservices.forEach(function (areaservice) {
          areaservice.solutions.forEach(function (solution) {
            if (solution.quotations[0].viewing_required || (solution.quotations[0].material_cost * solution.quotations[0].labour_cost > 0)) {
              solution.quotations[0].quoted = true;
            }
          });
        });
      }
    });
    quotes.unshift(_quote);
    return _quote;
  }
};