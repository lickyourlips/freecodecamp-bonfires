// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Boolean Objects

function boo(bool) {
	// if bool is a boolean primitive return true
	if (bool === true || bool === false) {
		return true;
	} else {
		return false;
	}
}

boo("false");