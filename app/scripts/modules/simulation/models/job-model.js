import Backbone from 'backbone';

var JobModel = Backbone.Model.extend({
	defaults: {
		'duration': 0,
		'pages', 0,
		'inkDemand': 0,
		'id': 0
	},

	initialize: function() {
		console.log('job-model initialized');
	}
});

{ export JobModel };