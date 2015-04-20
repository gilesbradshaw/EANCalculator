'use strict';

//Calculate service used for communicating with the calculate REST endpoints
angular.module('calculate').factory('Calculate', ['$resource',
	function($resource) {
		return $resource('calculator/add/:operand1/:operand2', {
			operand1: '@operand1',
			operand2: '@operand2'
		}
		);
	}
]);