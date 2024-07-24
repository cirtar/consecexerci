// Assuming dims is an array
let dims = [];

// Assuming you have values for index and query
let index = 1; // or some other value
let query = [10, 20, 30]; // example array

for (let i = 0; i < query.length; i++) {
  // Create a new Dimension object and push it into the dims array
  dims.push(new Dimension(index, i, query[i]));
}

console.log(dims);
