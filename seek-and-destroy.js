// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Arguments object
// Array.filter()

function destroyer(arr) {

	function compArr(elemValue) {

		if (elemValue != this) {
			// elemValue doesn't equal n, so we want to keep elemValue
			return true;
		} else {
			// elemValue does equal n, so we want to remove elemValue
			return false;
		}

	}

	// loop through arguments, from position 1 to n
	for (var i = 1; i < arguments.length; i++) {
		// filter arr to exclude the i-th element of arguments
		arr = arr.filter(compArr, arguments[i]);
	}

	console.log(arr);
	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);