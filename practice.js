console.log("Hello world");
//var is the old way
var name1 = "Test";
console.log(name1);

var name2 = 12;
console.log(name1);

var name2 = 12;
console.log(name2);

// variables can be reassinged
//let is the new way
let city = "New York";
console.log(city);

city = "Seattle";
console.log(city);

//constants , const -> cannot be reassigned
const pi = 3.14;
// pi = 34; //TypeError: Assignment to constant variable.
console.log(pi);

console.log(typeof pi); // to  know the data type of a variable

let car = null;
console.log(car);
console.log(typeof car); // null retuens object

let salary;
console.log(salary);
console.log(typeof salary); // undefined
