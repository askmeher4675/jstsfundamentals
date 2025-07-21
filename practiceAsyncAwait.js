function cookDosa() {
  console.log("👨‍🍳 Order received for Dosa. Cooking...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Dosa is ready");
      resolve(); // Notify that cooking is done
    }, 3000);
  });
}

async function placeOrder() {
  await cookDosa(); // Wait until dosa is ready
  console.log("🧑‍🍽️ Waiter: Serving Dosa to customer.");
}

placeOrder();