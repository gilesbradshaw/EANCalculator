'use strict';

/**
 * Module dependencies.
 */
var calulator = require('../../app/controllers/calculator.server.controller');

module.exports = function(app) {
	// Calculator Routes
	app.route('/calculator/add/:operand1/:operand2')
		.get(calulator.calculate);


	// Finish by binding the calculator middleware
	app.param('operand1', calulator.operand1);
	app.param('operand2', calulator.operand2);
};