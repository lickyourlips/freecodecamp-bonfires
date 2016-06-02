// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// RegExp
// String.replace()

function spinalCase(str) {

	var regX = /(\s|_)|(([a-z])([A-Z]))|[A-Z]/g;

	var newString = str.replace(regX, function(match, capGroup1, capGroup2, capGroup3, capGroup4) {

		if (capGroup1) {
			// space or underscore to be replaced with hyphen
			return "-";
		}
		if (capGroup2) {
			// lowercase followed by UPPERCASE to be separated by hyphen
			return capGroup3 + "-" + capGroup4.toLowerCase();
		}
		// UPPERCASE to be changed to lowercase
		return match.toLowerCase();

	});

	console.log(newString);
	return newString;
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');