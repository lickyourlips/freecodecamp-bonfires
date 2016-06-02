// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.push()

function chunk(arr, size) {
	// get the required number of arrays
	var newArrCount = Math.round(arr.length / size);

	// create container array
	var containArr = [];

	// loop through the count of arrays contained in containArr
	for (var i = 0; i < newArrCount; i++) {
		// splice required number of elements from arr, pushing them to containArr
		containArr.push(arr.splice(0, size));
	}

	console.log(containArr);
	return containArr;
}

chunk([0, 1, 2, 3, 4, 5], 4);