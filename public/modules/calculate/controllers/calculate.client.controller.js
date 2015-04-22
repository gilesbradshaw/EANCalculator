'use strict';
var  React=window.React;
var app = angular.module('calculate');
app.controller('CalculateAnswerController', ['$scope', '$stateParams', 'Calculate',
	function($scope, $stateParams, Calculate) {
		var result=Calculate.get($stateParams);
		$scope.calculation = angular.extend({}, $scope.calculation,$stateParams);
		$scope.calculation.result='...';

		result.$promise.then(function(data){
			if (data.result===null)
			{
				$scope.calculation.result='FAILED!!!';
			}
			else
			{
				$scope.calculation.result=data.result;
			}
		});

	}
]);


app.controller('CalculateQuestionController', ['$scope',
	function($scope) {
		$scope.calculation={
		};
	}
]);

var QuestionComponent = React.createClass({
  propTypes: {
   // operand1 : React.PropTypes.string.isRequired,
   // operand2 : React.PropTypes.string.isRequired
  },
  render: function() {
  	return React.createElement('span',null,
  			React.createElement('input', {type:'text',value:this.props.operand1,onChange:this.handleChange.bind(this,'operand1')}),
  			React.createElement('span',null,'+'),
  			React.createElement('input', {type:'text',value:this.props.operand2,onChange:this.handleChange.bind(this,'operand2')}),
  			//crappy!
  			React.createElement('a', {href:'/#!/add/' + this.props.operand1 + '/' + this.props.operand2},'=')

  		);
  	
    
  },
  handleChange:function(name,e){
  	this.props[name] = e.target.value;
  	var state={};
  	state[name]=e.target.value;
  	this.setState(state);
  	
  }
});
app.value('QuestionComponent', QuestionComponent);


var AnswerComponent = React.createClass({
  propTypes: {
    operand1 : React.PropTypes.string.isRequired,
    operand2 : React.PropTypes.string.isRequired
  },
  render: function() {
  	return React.createElement('span',null, this.props.operand1 + ' + ' + this.props.operand2 + ' = ' + this.props.result );
    
  },
  handleChange:function(name,e){alert(name + ':' + e.target.value);}
});
app.value('AnswerComponent', AnswerComponent);