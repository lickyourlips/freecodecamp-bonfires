// Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// RegExp
// HTML Entities

function convert(str) {
	// &colon;&rpar;
	
	var ConvertChars = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};
	var regX = /[&<>"']/g;

	var newString = str.replace(regX, function(match) {
		return ConvertChars[match];
	});

	console.log(newString);
	return newString;
}

convert('Dolce & Gabbana');
convert('Hamburgers < Pizza < Tacos');
convert('Stuff in "quotation marks"');