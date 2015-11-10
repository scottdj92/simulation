import Backbone from 'bower_components/backbone/backbone.js';

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

export { WorkerModel };