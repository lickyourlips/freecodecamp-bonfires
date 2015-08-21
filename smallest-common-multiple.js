// Find the smallest number that is evenly divisible by all numbers in the provided range.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Smallest Common Multiple

function isInteger(n) {
	return n === parseInt(n, 10) ? true : false;
}

function smallestCommons(arr) {

	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);

	var isEvenlyDivisible = true;
	var multiple = 0;
	var factor = 1;

	do {
		
		multiple = max * factor;
		
		// excluding max, check each descending number in the range for even divisibility
		for (var i = max - 1; i > min; i--) {

			var divTest = multiple / i;
			if (!isInteger(divTest)) {
				isEvenlyDivisible = false;
				break;
			} else {
				isEvenlyDivisible = true;
			}
		}
		
		factor++;

	} while (!isEvenlyDivisible);

	console.log("SCM of " + arr + " is: " + multiple);
	return multiple;
}

smallestCommons([1, 5]); // to be a number
smallestCommons([1, 5]); // 60
smallestCommons([5, 1]); // 60
smallestCommons([1, 13]); // 360360