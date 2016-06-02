// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Math.max()
// Math.min()
// Array.reduce()

function sumAll(arr) {
    // find min of arr
    var min = Math.min(arr[0], arr[1]);
    // find max of arr
    var max = Math.max(arr[0], arr[1]);
    console.log("min: " + min + "; max: " + max);

    // make an array containing all the numbers to be summed
    var sumArrRange = [];
    for (i = min; i <= max; i++) {
        sumArrRange.push(i);
    }
    console.log("Numbers to sum: " + sumArrRange);

    // sum all numbers in sumArrRange
    var sumArr = sumArrRange.reduce(function(prev, curr) {
        return prev + curr;
    });
    console.log("Summed number range: " + sumArr);

    return sumArr;
}

sumAll([4, 1]);