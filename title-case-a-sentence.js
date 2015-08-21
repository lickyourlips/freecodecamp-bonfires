// Return the provided string with the first letter of each word capitalized.

// For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.charAt()

function titleCase(str) {

	console.log(str);

	// force the whole string to lower case and split it into an array by spaces
	strArr = str.toLowerCase().split(' ');

	// loop through the string array
	for (var i = 0; i < strArr.length; i++) {

		charAtZero = strArr[i].charAt(0);
		uCaseChar = charAtZero.toUpperCase();

		strArr[i] = strArr[i].replace(charAtZero, uCaseChar);
	}

	// re-join the string array, separated by spaces
	newStr = strArr.join(' ');

	console.log(newStr);

	return newStr;

}

titleCase("I'm a little tea pot");