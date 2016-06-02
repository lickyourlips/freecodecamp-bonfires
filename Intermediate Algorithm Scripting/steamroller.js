// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.isArray()

function steamroller(arr) {
	// I'm a steamroller, baby

	arr = arr.toString().split(',');

	arr = arr.filter(function(element) {
		return element !== '';
	});

	for (var i = 0; i < arr.length; i++) {
		if ( !isNaN( Number(arr[i]) ) ) {
			arr[i] = Number(arr[i]);
		}
	}

	console.log("Result: " + arr);
	return arr;
}

steamroller([1, [], [3, [[4]]]]);
// steamroller([[['a']], [['b']]]);
// steamroller([1, [2], [3, [[4]]]]);