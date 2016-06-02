// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

// For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.sort()

function where(arr, num) {
	// push num into arr, sort it, then get num's index
	arr.push(num);
	arr.sort();
	
	index = arr.indexOf(num);

	console.log(index);
	
	return index;
}

where([40, 60], 50);