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
