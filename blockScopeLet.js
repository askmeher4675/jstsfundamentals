// let and const are scoped to the nearest block {}

if (true) {
  let message = "Inside block";
  console.log(message);
}
console.log(message); //ReferenceError: message is not defined
// will not work , as outside {}

let m = "Inside block";
if (true) {
  console.log(m);
}
