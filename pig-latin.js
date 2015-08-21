// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.indexOf()
// Array.push()
// Array.join()
// String.substr()
// String.split()

function translate(str) {

	// get the index of the first vowel in str
	var vowelIndex = str.search(/[aeiou]/g);

	var arrStr = str.split('');
	// splice (from 0 to vowelIndex) anything in arrStr that isn't a vowel
	var splicedArray = arrStr.splice(0, vowelIndex);

	// concat and join arrStr with splicedArray, plus the correct suffix
	var retVal = arrStr.concat(splicedArray).join('') + (vowelIndex === 0 ? 'way' : 'ay');

	console.log(retVal);
	return retVal;
}

translate("omg");