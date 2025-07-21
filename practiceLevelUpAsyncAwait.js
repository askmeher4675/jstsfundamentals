// Step 1: Cook Dosa
function cookDosa() {
  console.log("👨‍🍳 Order received for Dosa. Cooking...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Dosa is ready");
      resolve();
    }, 3000);
  });
}

// Step 2: Prepare Juice
function prepareJuice() {
  console.log("🍹 Preparing juice...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Juice is served");
      resolve();
    }, 2000);
  });
}

// Step 3: Serve Dessert
function serveDessert() {
  console.log("🍰 Getting dessert ready...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Dessert is served");
      resolve();
    }, 1000);
  });
}

// Main Order Flow
async function placeOrder() {
  await cookDosa();
  await prepareJuice();
  await serveDessert();
  console.log("🧾 All items served to customer. Enjoy your meal!");
}

// Trigger the process
placeOrder();
