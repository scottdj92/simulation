"use strict";
var $__bower_95_components_47_backbone_47_backbone_46_js__;
var Backbone = ($__bower_95_components_47_backbone_47_backbone_46_js__ = require("bower_components/backbone/backbone.js"), $__bower_95_components_47_backbone_47_backbone_46_js__ && $__bower_95_components_47_backbone_47_backbone_46_js__.__esModule && $__bower_95_components_47_backbone_47_backbone_46_js__ || {default: $__bower_95_components_47_backbone_47_backbone_46_js__}).default;
var WorkerModel = Backbone.Model.extend({
  defaults: {
    'name': '',
    'jobs': [],
    'waitTolerance': 0
  },
  initialize: function() {
    console.log('worker-model initialized');
  }
});
Object.defineProperties(module.exports, {
  WorkerModel: {get: function() {
      return WorkerModel;
    }},
  __esModule: {value: true}
});
