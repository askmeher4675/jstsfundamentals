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
