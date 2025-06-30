//arrow function with multiple lines
// can be used inside {} and return statement should be used explicitly

const multiply = (a, b) => {
  let result = a * b;
  // return result; // without return type , Output : undefined
};
console.log(multiply(2, 3)); // Output : undefined

const multiply2 = (a, b) => {
  let result = a * b;
  return "Output " + result; // without return type , Output : undefined
};
console.log(multiply2(2, 3));
