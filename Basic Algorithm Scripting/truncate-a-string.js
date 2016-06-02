// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

// Note that the three dots at the end add to the string length.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.slice()

function truncate(str, num) {

	if (str.length > num) {
		slicedString = str.slice(0, num -3) + "...";
	} else {
		slicedString = str;
	}

	console.log(slicedString);
	return slicedString;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);