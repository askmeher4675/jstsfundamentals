function childCallback() {
  console.log("Child: I bought the milk!");
}

function parentSendsChildToShop(callback) {
  console.log("Parent: Go buy milk.");

  setTimeout(() => {
    console.log("Child: (buying milk...)");
    callback(); // 👈 This calls childCallback
  }, 5000);
}

parentSendsChildToShop(childCallback);
