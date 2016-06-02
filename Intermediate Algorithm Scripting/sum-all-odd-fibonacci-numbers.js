// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

// As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Remainder

function sumFibs(num) {

	var f1 = 1;
	var f2 = 1;
	var fib = 1;
	var oddFib = 0;

	// loop while fib is not greater than num
	for (var i = 0; fib <= num; i++) {
		// if fib is not an even number it will be summed in oddFib
		if (fib % 2 !== 0) {
			oddFib += fib;
		}
		// only start adding fibs after one loop
		if (i > 0) {
			fib = f1 + f2;
		}
		// iterate the temp variables
		f2 = f1;
		f1 = fib;
	}

	console.log("oddFib: " + oddFib);
	return oddFib;

}

sumFibs(1);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);