// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.replace()
// String.toLowerCase()

function palindrome(str) {

  str = str.replace(/\s/g, ''); // trim spaces
  str = str.replace(/\W/g, ''); // trim non-alphnumeric chars
  str = str.toLowerCase();

  strArr = str.split('');

  // Working inwards, compare the front– and back-most elements of the array
  arrLen = strArr.length - 1;

  for (i = 0; i <= arrLen; i++) {
    j = arrLen - i;

    console.log("Comparing: " + strArr[i] + " to " + strArr[j]);

    if (strArr[i] !== strArr[j]) {
      return false;
    }

  }

  return true;
}

console.log(palindrome("eye"));