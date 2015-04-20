'use strict';


/**
 * calculate result
 */
exports.calculate = function(req, res) {
	res.json({result:(req.operand1 + req.operand2)});
};

/**
 * Calculator middleware
 */
exports.operand1 = function(req, res, next, value) {
	req.operand1=Number(value);
	next();
};
exports.operand2 = function(req, res, next, value) {
	req.operand2=Number(value);
	next();
};

