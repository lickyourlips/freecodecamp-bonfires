// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Arguments object
// Array.shift()

function drop(arr, func) {
	// Drop them elements.

	while (!func(arr[0]) && arr.length > 0) {
		arr.shift();
	}

	console.log("Returning: " + arr);
	return arr;
}

drop([1, 2, 3, 4], function(n) {
	return n > 5;
});