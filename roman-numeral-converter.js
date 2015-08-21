// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.splice()
// Array.indexOf()
// Array.join()

function convert(num) {

	if (num <= 0) {
		return NaN;
	} else if (num < 4000) {
		numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

		var digits = num.toString().split('');
		var tempArr = [];
		var x = 0;

		for (var d = digits.length - 1; d >= 0; d--) {

			var currentDigit = Number(digits[d]);
			var tempVal = "";

			// this switch will work on numbers up to 3999 because the counting system changes in the thousands
			switch (currentDigit) {
				case 1:
				case 2:
				case 3:
					for (var i = 0; i < currentDigit; i++) {
						tempVal += numerals[x];
					}
					break;
				case 4:
					tempVal = numerals[x] + numerals[x + 1];
					break;
				case 5:
					tempVal = numerals[x + 1];
					break;
				case 6:
				case 7:
				case 8:
					tempVal += numerals[x + 1];
					for (var i = 0; i < currentDigit - 5; i++) {
						tempVal += numerals[x];
					}
					break;
				case 9:
					tempVal = numerals[x] + numerals[x + 2];
					break;
			}
			x += 2;

			tempArr.push(tempVal);
		}

		retVal = tempArr.reverse().join('');
		console.log(num + " equates to " + retVal);

	}

	return retVal;

}

for (var i = 0; i <= 4000; i++) {
	convert(i);
}