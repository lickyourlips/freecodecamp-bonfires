// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.charCodeAt()
// String.fromCharCode()

function fearNotLetter(str) {

	var missingChar;

	// loop through str's characters
	for (var i = 0; i < str.length; i++) {

		// get previous and current character variables
		var prevChar = str.charCodeAt(i);
		var currChar = str.charCodeAt(i + 1);

		// test for a sequence break between characters
		if (currChar - prevChar > 1) {
			// set var to next character in the sequence
			missingChar = String.fromCharCode(prevChar + 1);
			// looking for first occurrence only, so break here
			break;
		}

	}

	// return the missing letter
	console.log("The first missing char in the sequence is: " + missingChar);
	return missingChar;
}

fearNotLetter('abce');