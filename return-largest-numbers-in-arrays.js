// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

// If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Comparison Operators

function largestOfFour(arr) {
	
	returnArr = [];

	// loop through the main array
	for (var i = 0; i < arr.length; i++) {

		// get the largest of the first two elements
		myMax = Math.max(arr[i][0], arr[i][1]);

		// loop through the remaining elements of the sub-array
		for (var j = 2; j < arr[i].length; j++) {
			// get the largest of the subsequent elements
			myMax = Math.max(myMax, arr[i][j]);
		}

		// push the largest numbers into the return array stack
		returnArr.push(myMax);

	}

	console.log(returnArr);

	return arr;

}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);