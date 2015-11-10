import Backbone from 'bower_components/backbone/backbone.js';

var PrinterModel = Backbone.Model.extend({
	defaults: {
		'job' : [],
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

export { PrinterModel };