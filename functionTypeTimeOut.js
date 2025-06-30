// ✅ 1. Basic Example: Using an anonymous arrow function
// No need to call this manually. setTimeout runs automatically and delays execution of the function.
// It schedules the function to run after the specified time (in milliseconds).

setTimeout(() => {
    console.log("Calling Function");
    console.log("✅ This message appears after 7 seconds");
}, 7000);
