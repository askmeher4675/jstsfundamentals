// SIMPLE FUNCTION
function sayHi() {
  return "Hi"; // This value goes back to the caller
}

// SIMPLE CALLBACK
function doSomething(callback) {
  const result = "Task done";          // Simulated result (e.g., processed data)
  callback(result);                    // Calls the callback with the result
}

// ASYNC CALLBACK
function doSomethingAsync(callback) {
  setTimeout(() => {
    const result = "✅ Async task complete"; // Simulated async result
    callback(result);                        // Callback is executed after delay
  }, 2000); // 2000ms = 2 seconds
}

// === Calling the functions ===

console.log(sayHi()); // Output: Hi

doSomething((msg) => {
  console.log("Callback received:", msg);
});


doSomethingAsync((msg) => {
  console.log("Async callback received:", msg);
});
