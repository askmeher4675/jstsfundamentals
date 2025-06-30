// ---------------------------
// Callback Example: orderCoffee
// ---------------------------

// A callback is just a function passed **as an argument** to another function.
// It gets called later — usually after some async task like fetching data or waiting.

// No need to mark anything as async here. Callbacks work without async/await or Promises.

// This function simulates ordering coffee. It takes a callback function as an argument.
function orderCoffee(callback) {
  setTimeout(() => {
    callback("Coffee is Ready!");
  }, 2000);
}

// You pass a function (the callback) that receives the result when it's ready.
orderCoffee((coffee) => {
  console.log(coffee); // Output: "Coffee is Ready!" // It will be executed AFTER 2 seconds, when setTimeout completes.
});

// Summary:
// 1. orderCoffee() accepts a function.
// 2. That function is saved and called later (inside setTimeout).
// 3. This is the core idea of a "callback".
