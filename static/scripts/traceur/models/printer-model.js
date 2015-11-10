"use strict";
var $__bower_95_components_47_backbone_47_backbone_46_js__;
var Backbone = ($__bower_95_components_47_backbone_47_backbone_46_js__ = require("bower_components/backbone/backbone.js"), $__bower_95_components_47_backbone_47_backbone_46_js__ && $__bower_95_components_47_backbone_47_backbone_46_js__.__esModule && $__bower_95_components_47_backbone_47_backbone_46_js__ || {default: $__bower_95_components_47_backbone_47_backbone_46_js__}).default;
var PrinterModel = Backbone.Model.extend({
  defaults: {
    'job': [],
    'currentJob': undefined,
    'status': undefined,
    'timeToPrint': 0,
    'paperLeft': 0,
    'inkLeft': 0
  },
  initialize: function() {
    console.log('printer-model initialized');
  }
});
Object.defineProperties(module.exports, {
  PrinterModel: {get: function() {
      return PrinterModel;
    }},
  __esModule: {value: true}
});
