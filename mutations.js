// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

// Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.indexOf()

function mutation(arr) {

	// split each element of arr into an array of characters - i.e. ['l', 'i', 'n', 'e']
	arrElem0 = arr[0].split('');
	arrElem1 = arr[1].split('');

	console.log(arrElem0);
	console.log(arrElem1);

	// iterate through each character of the second element of arr
	for (var i = 0; i < arrElem1.length; i++) {
		
		// if the current char of arrElem1 is not at any index of arrElem0, set return value as false
		if ( arrElem0.indexOf(arrElem1[i]) === -1 ) {
			retVal = false;
		} else {
			// at least one char of arrElem1 is contained in arrElem0
			retVal = true;
		}

	}

	console.log(retVal);

	return retVal;

}

mutation(['line', 'a']);