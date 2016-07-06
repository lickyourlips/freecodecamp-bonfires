// Make a function that looks through a list (first argument) and returns an array of all objects that have equivalent property values (second argument).

// Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Global Object
// Object.hasOwnProperty()
// Object.keys()

function where(collection, source) {

	var arr = [];
	// get an array of property names from 'source'
	var sourceKey = Object.keys(source);
	// sourceKey should only have one element, assign its value to sourceProp
	var sourceProp = sourceKey[0];

	// loop through the collection array
	for (var i = 0; i < collection.length; i++) {

		// if the current collection item has a property of the same name as sourceProp
		// ... and, then, the value of the current collection item's sourceProp property is the same as source's
		if (collection[i].hasOwnProperty(sourceProp) &&
			collection[i][sourceProp] === source[sourceProp]) {
			// push the current collection object to arr
			arr.push(collection[i]);
		}

	}

	console.log(arr);

	return arr;
}

where(
		[
			{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }
		],
			{ 'a': 1}
	);