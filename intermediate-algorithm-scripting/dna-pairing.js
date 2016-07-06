// The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.push()
// String.split()

function pair(str) {
	var strArr = str.split('');

	var containArr = [];

	for (var i = 0; i < strArr.length; i++) {
		var midArr = [];
		midArr.push(strArr[i]);
		switch	(strArr[i]) {
			case 'G':
				midArr.push('C');
				break;
			case 'C':
				midArr.push('G');
				break;
			case 'A':
				midArr.push('T');
				break;
			case 'T':
				midArr.push('A');
				break;
		}
		containArr.push(midArr);
	}

	console.log(str);
	return containArr;
}

pair("GCG"); // should return [['G', 'C'],['C','G'],['G','C']]
pair("ATCGA"); // should return [['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]
pair("TTGAG"); // should return [['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]
pair("CTCTA"); // should return [['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]