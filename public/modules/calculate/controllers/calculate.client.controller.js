'use strict';

angular.module('calculate').controller('CalculateController', ['$scope', '$stateParams', '$location', 'Calculate',
	function($scope, $stateParams, $location,Calculate) {
		$scope.operand1= $stateParams.operand1;
		$scope.operand2= $stateParams.operand2;
		$scope.result=Calculate.get($stateParams);
		$scope.fail = false;
		//not what I expected??
		$scope.result.$promise.then(function(data){
			if (data.result===null)
			{
				$scope.fail=true;
			}
		});
	}
]);