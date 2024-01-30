// insertion O(1)
// removal O(1)
// searching O(n)
// access O(1)

let instructor = {
  firstName: "Lola",
  cool: true,
};

//keys O(n)
console.log(Object.keys(instructor));
//[ 'firstName', 'cool' ]

//values O(n)
console.log(Object.values(instructor));
//[ 'Lola', true ]

//entries O(n)
console.log(Object.entries(instructor));
//[ [ 'firstName', 'Lola' ], [ 'cool', true ] ]

//hasOwnProperty O(1)
console.log(instructor.hasOwnProperty("cool"));
//true

//What is the big O for accessing a key in an object?
// O(1)
