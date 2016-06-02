// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.prototype.charCodeAt()
// String.fromCharCode()

function rot13(str) { // LBH QVQ VG!

	// Cycle through each char of str

  	return str.replace(/[A-Z]/g, function(match){
		
		code = match.charCodeAt();

		// Range 65–77 (A–M)
		if (78 > code) {
			return String.fromCharCode(code + 13);
		}
		
		// Range 78–90 (N–Z)
		if (77 < code) {
			return String.fromCharCode(code - 13);
		}

	});
}

// Tests
function assertEquals(assertion, expected) {
	if (assertion === expected) {
		console.log(".");
	} else {
		console.log("Failed asserting that '%s' equals '%s'", assertion, expected);
	}
}

assertEquals(rot13("LBH QVQ VG!"), "YOU DID IT!");
assertEquals(rot13("SERR PBQR PNZC"), "FREE CODE CAMP");
assertEquals(rot13("SERR CVMMN!"), "FREE PIZZA!");
assertEquals(rot13("SERR YBIR?"), "FREE LOVE?");
assertEquals(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."), "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");