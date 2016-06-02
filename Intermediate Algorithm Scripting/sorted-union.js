// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.reduce()

function unite(arr1, arr2, arr3) {

	var uniqueElements = [];
	var arrayFlag = false;
	var elementValue;

	// slice any arrays in arguments into an array
	var args = Array.prototype.slice.call(arguments);

	args.forEach(function(argElement) {
		// loop through each argElement recursively
		argElement.forEach(digDeep);
	});

	function digDeep(element) {

		if (Array.isArray(element)) {
			// the current element is itself an array, so we need to dig deeper..
			arrayFlag = true;
			element.forEach(digDeep);

			// test if elementValue is defined and does not exist in uniqueElements
			if (elementValue && uniqueElements.indexOf(elementValue) === -1) {
				// elementValue is not already in uniqueElements, so element itself can be pushed
				uniqueElements.push(element);
			}

			// reset flag
			arrayFlag = false;

		} else {
			// current element is a value
			if (arrayFlag === false) {
				// we're only working one level deep here, so we can test for uniqueness
				if (uniqueElements.indexOf(element) === -1) {
					// element does not exist in uniqueElements, so push it in
					uniqueElements.push(element);
				}
			} else {
				// we are working two levels deep here, so we just need the value of element
				// set global elementValue to test for uniqueness later
				elementValue = element;
			}
		}
	}

	console.log(uniqueElements);
	return uniqueElements;
}

unite([1, 2, 3], [5, [2], 1, [4]], [2, 1]);