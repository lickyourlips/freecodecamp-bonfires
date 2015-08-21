// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.some()

function find(arr, func) {

	var num;

	arr.some(function(currentValue) {

		if (func(currentValue)) {
			num = currentValue;
		}
		// return from callback
		return num ? num : false;

	});

	console.log("result is: " + num);
	return num;
}

find([1, 3, 5, 8, 9, 10], function(num) {
	return num % 2 === 0;
});

find([1, 3, 5, 9], function(num) {
	return num % 2 === 0;
});