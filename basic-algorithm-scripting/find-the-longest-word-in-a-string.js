// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.split()
// String.length

function findLongestWord(str) {

	// break the string into an array of strings
	strArr = str.split(' ');

	// assign an initial value to longestStr
	longestStr = Math.max(strArr[0].length, strArr[1].length);

	// loop through the array
	for (var i = 1; i < strArr.length - 1; i++) {
		// assign the longer of two strings to longestStr
		longestStr = Math.max(longestStr, strArr[i + 1].length);
	}

	console.log("The longest string is: " + longestStr);

	return longestStr;
}

findLongestWord('The quick brown fox jumped over the lazy dog');