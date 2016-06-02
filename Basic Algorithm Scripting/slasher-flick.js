// Return the remaining elements of an array after chopping off n elements from the head.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.slice()
// Array.splice()

function slasher(arr, howMany) {
  // slice arr into a new array from the element as position 'howMany', for the length of the array
  slashedArr = arr.slice(howMany, arr.length);
  console.log(slashedArr);
  return slashedArr;
}

slasher([1, 2, 3], 2);