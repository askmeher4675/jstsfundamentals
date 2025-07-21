//Callback is 

function doSomething(a) {
  const result = "Task done";  
  a(result);                   
}

function doSomethingCallback(callback) {
  const result = "Task done Callback";  
  callback(result);                     
}

function doNothing() {
  return "Nothing";  
}

doSomething((varA) => console.log(varA)); 
doSomethingCallback((varB) => console.log(varB)); 
console.log(doNothing()); 
