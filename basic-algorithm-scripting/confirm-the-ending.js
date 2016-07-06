// Check if a string (first argument) ends with the given target string (second argument).

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.substr()

function end(str, target) {
	// "Never give up and good luck will find you."
	// -- Falcor

	subStrLength = target.length;
	subStrStart = (str.length) - subStrLength;

	console.log(subStrStart);
	console.log(subStrLength);

	if (str.substr(subStrStart, subStrLength).toLowerCase() == target.toLowerCase()) {
		return true;
	} else {
		return false;
	}

}

end('Bastian', 'n');