// Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.

// For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an argument so that var sum2And = add(2); return sum2And(3); // 5

// If either argument isn't a valid number, return undefined.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Global Function Object
// Arguments object

function add() {

	// local function definition, called only when arguments.length is 1
	var addExtraArg = function(num2) {
		// var num1 will be in scope
		return argIsNumber(num2) ?
			sum2Args(num1, num2) : undefined;
	};

	if (arguments.length === 1) {
		// set arguments[0] in scope
		var num1 = arguments[0];
		// try to return addExtraArg() to get a trailing argument
		return argIsNumber(num1) ?
			addExtraArg : undefined;
	}

	// if arguments has two elements, test them and send them both to sum2Args for the result
	if (arguments.length === 2) {
		return argIsNumber(arguments[0]) && argIsNumber(arguments[1]) ?
			sum2Args(arguments[0], arguments[1]) : undefined;
	}

}

function argIsNumber(arg) {
	return typeof arg === 'number' ?
		arg : false;
}

function sum2Args() {
	return arguments[0] + arguments[1];
}

console.log( add(2, 3) ); // 5
console.log( add( (2), (3) ) ); // 5
console.log( add('http://bit.ly/IqT6zt') ); // undefined
console.log( add(2, '3') ); // undefined
console.log( add(2)([3]) ); // undefined