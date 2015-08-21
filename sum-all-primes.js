// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

// The provided number may not be a prime.

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// For Loops
// Array.push()

function isPrime(n) {

	switch (n) {
		case 1:
			// 1 is not primal
			return false;
		case 2:
			// 2 is a primal, we know that much.
			return true;
		default:
			// get the square root of n, rounded up, which will be the ceiling
			var nSqrtUp = Math.ceil(Math.sqrt(n));

			// check numbers from 2 to nSqrtUp (because nSqrtUp can equal 2)
			for (var i = 2; i <= nSqrtUp; i++) {
				// test for n's divisibility with i
				var result = n / i;
				if (result === parseInt(result, 10)) {
					// if n is evenly divisible by i then n cannot be primal
					return false;
				}
			}
	}

	// n is not evenly divisible by any number checked, therefore n must be primal
	return true;
}

function sumPrimes(num) {

	var sumNum = 0;

	for (var i = 1; i <= num; i++) {

		if (isPrime(i)) {
			console.log(i + " is primal");
			sumNum += i;
		}
	}

	console.log("sumNum = " + sumNum);
	return sumNum;

}

sumPrimes(977);