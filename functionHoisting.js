// both at top and below function  works as
// functions are hoisted on top in JavaScript Engine

// NOTE : functions defined to a vatiable such as
// var, let and cosnt cannnot be called before they are defined
greet(); //Hello
function greet() {
  console.log("Hello");
}
greet(); //Hello

greetVar(); // ❌ TypeError: greet is not a function

var greetVar = function () {
  console.log("Hello from greet");
};
