'use strict';
var Calculator = function() {

	/**
	 * Add two numbers
	 * @param {Number} a - first number to add
	 * @param {Number} b - second number to add
	 * @return {Number} the result of the addition
	 */
	var _add = function(a, b) {
		return a + b;
	};

	var _mul = function(a, b) {
		return a * b;
	}

	return {
		add : _add,
		mul : _mul
	};
};

// module exports
module.exports = Calculator;
