'use strict';

// Setting up route
angular.module('calculate').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
		// Calculate state routing

		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('calculate', {
			url: '/',
			controller:'CalculateQuestionController',
			templateUrl: 'modules/calculate/views/calculate.client.view.html'
		})
		.state('calculate.add', {
			url: 'add/:operand1/:operand2',
			controller:'CalculateAnswerController',
			templateUrl: 'modules/calculate/views/calculate.result.client.view.html'
		});
	}
]);