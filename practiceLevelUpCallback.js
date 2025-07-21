function cookDosa(callback) {
  console.log("👨‍🍳 Order received for Dosa. Cooking...");
  setTimeout(() => {
    console.log("✅ Dosa is ready");
    callback();
  }, 3000);
}

function prepareJuice(callback) {
  console.log("🍹 Preparing juice...");
  setTimeout(() => {
    console.log("✅ Juice is served");
    callback();
  }, 2000);
}

function serveDessert(callback) {
  console.log("🍰 Getting dessert ready...");
  setTimeout(() => {
    console.log("✅ Dessert is served");
    callback();
  }, 1000);
}

function placeOrder() {
  cookDosa(()=>{
    prepareJuice(()=>{
        serveDessert(()=>{
            console.log("🧾 All items served to customer. Enjoy your meal!");
        })
    })
  })
}

placeOrder();
