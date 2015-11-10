"use strict";
var $__bower_95_components_47_backbone_47_backbone_46_js__;
var Backbone = ($__bower_95_components_47_backbone_47_backbone_46_js__ = require("bower_components/backbone/backbone.js"), $__bower_95_components_47_backbone_47_backbone_46_js__ && $__bower_95_components_47_backbone_47_backbone_46_js__.__esModule && $__bower_95_components_47_backbone_47_backbone_46_js__ || {default: $__bower_95_components_47_backbone_47_backbone_46_js__}).default;
var JobModel = Backbone.Model.extend({
  defaults: {
    'duration': 0,
    'pages': 0,
    'inkDemand': 0,
    'id': 0
  },
  initialize: function() {
    console.log('job-model initialized');
  }
});
Object.defineProperties(module.exports, {
  JobModel: {get: function() {
      return JobModel;
    }},
  __esModule: {value: true}
});
