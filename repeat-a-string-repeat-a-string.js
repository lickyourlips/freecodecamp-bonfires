// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Global String Object

function repeat(str, num) {
	// repeat after me

	if (num < 0) {

		return "";

	} else {

		repeatedStr = "";

		for (var i = 0; i < num; i++) {
			repeatedStr = repeatedStr + str;
		}

		console.log(repeatedStr);
		return repeatedStr;
	}

}

repeat('abc', 3);