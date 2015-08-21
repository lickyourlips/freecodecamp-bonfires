// Remove all falsey values from an array.

// Falsey values in javascript are false, null, 0, "", undefined, and NaN.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Boolean Objects
// Array.filter()

function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	var filtered = arr.filter(Boolean);

	console.log(filtered);
	return filtered;
}

bouncer([7, 'ate', '', false, 9]);