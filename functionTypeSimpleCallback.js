function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Data fetched using Callback");
  }, 1000);
}

fetchDataWithCallback((data) => {
  console.log(data);
});

