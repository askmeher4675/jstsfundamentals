// JavaScript provides three main approaches for handling asynchronous operations:
// 1. Callback functions
// 2. Promises
// 3. Async/Await (built on top of Promises)

// Notes:
// - Async/Await requires the use of the 'async' keyword for defining asynchronous functions,
//   and 'await' can only be used inside those functions.
// - Callbacks and Promises do not require the 'async' keyword.
// - These methods are commonly used for tasks such as fetching data from a server.

// Example use case: Simulating fetching data with setTimeout

// ----------------------------------------------------------------
// 1. Callback Example
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Data fetched using Callback");
  }, 1000);
}

fetchDataWithCallback((data) => {
  console.log(data);
});

// ----------------------------------------------------------------
// 2. Promise Example
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched using Promise");
    }, 1000);
  });
}

fetchDataWithPromise().then((data) => {
  console.log(data);
});

// ----------------------------------------------------------------
// 3. Async/Await Example
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched using Async/Await");
    }, 1000);
  });
}

async function fetchDataWithAsyncAwait() {
  const data = await fetchData();
  console.log(data);
}

fetchDataWithAsyncAwait();
