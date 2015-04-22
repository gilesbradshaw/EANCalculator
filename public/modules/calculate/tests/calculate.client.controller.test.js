'use strict';

(function() {
	// Calculator Controller Spec
	describe('CalculateController', function() {
		// Initialize global variables
		var CalculateController,
			scope,
			$httpBackend,
			$stateParams,
			$controller;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function(_$controller_, $rootScope,  _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$controller= _$controller_;
			
		}));

		it('$scope.result() should get a calculation  XHR', inject(function(Calculate) {
			
			// parameters
			$stateParams.operand1=1;
			$stateParams.operand2=2;
			// Initialize the Calculator controller.
			CalculateController = $controller('CalculateAnswerController', {
				$scope: scope
			});

			var result = {result:999};

			// Set GET response
			$httpBackend.expectGET('calculator/add/1/2').respond(result);

			$httpBackend.flush();

			// Test scope value
			expect(scope.calculation.result).toEqualData(999);
		}));

		
	});
}());