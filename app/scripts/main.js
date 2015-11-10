//console.log('\'Allo \'Allo!');
import _ from 'underscore';
import Marionette from 'backbone.marionette';
import { PrinterModel } from 'app/scripts/modules/simulation/models/printer-model';
import { WorkerModel } from 'app/scripts/modules/simulation/models/worker-model';
import { JobModel } from 'app/scripts/modules/simulation/models/job-model';

var SimController = Marionette.Object.extend({
	initialize: function() {
		console.log('SimController init');
		//create empty object of views and models
		this.models = {};
		this.views = {};
	}
});
