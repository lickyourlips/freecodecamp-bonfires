// Compare two arrays and return a new array with any items not found in both of the original arrays.

// Remember to use RSAP if you get stuck.Try to pair program.Write your own code.

// Here are some helpful links:

// Comparison Operators
// String.slice()
// Array.filter()
// Array.indexOf()
// String.concat()

function diff(arr1, arr2) {

	var newArr = arr1.filter(keepElement, arr2).concat(arr2.filter(keepElement, arr1));

	// test whether an element is found in an array
	function keepElement(element) {
		if (this.indexOf(element) == -1) {
			// element is not found, so it should be kept
			console.log("'" + element + "' is not found in '" + this + "' so we shall keep it.");
			return true;
		}
	}

	console.log(newArr);
	return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'jolly roger', 'grass', 'dirt', 'dead shrub']);