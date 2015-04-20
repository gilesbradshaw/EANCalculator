'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user;

/**
 * Article routes tests
 */
describe('Calculator Route tests', function() {
	

	it('should be able to calulate', function(done) {
		
		// get a new calulation
		agent.get('/calculator/add/1/1')
			.expect(200)
			.end(function(calulateErr, calulateRes) {
				// Handle calulate error
				should.not.exist(calulateErr);
				(calulateRes.body.result).should.equal(2);
				done();
			});
	});

	
});