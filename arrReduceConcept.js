/**
 * Example: Counting frequencies using Array.prototype.reduce()
 * -----------------------------------------
 * This script uses `reduce()` to count the number of occurrences 
 * of each unique value in an array (`testResults`).
 * 
 * Concepts demonstrated:
 * - `accumulator` holds the result being built (here, an object)
 * - `currentValue` is the current item from the array
 * - `currentIndex` is the position of the current item (useful for debugging)
 * - `array` is the original array being reduced (rarely needed)
 * 
 * `accumulator[currentValue] = (accumulator[currentValue] || 0) + 1`
 * - This line ensures that we initialize the count at 0 if the value hasn't been seen yet,
 *   and then add 1 each time that value is found.
 * 
 * Initial value of accumulator is set to an empty object: {}
 * 
 * NOTE: Only `accumulator` and `currentValue` are required in the callback;
 *       `currentIndex` and `array` are optional and mainly for reference/debugging.
 */

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

let countAll = testResults.reduce((accumulator, currentValue, currentIndex, array) => {
    console.log("---------");
    console.log("Current Index:", currentIndex);        // shows which element is being processed
    console.log("Current Value:", currentValue);        // the value at current index
    console.log("Accumulator so far:", accumulator);    // state of accumulator before this step

    // Core logic: increment count of currentValue in accumulator
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;

    console.log("Accumulator Now:", accumulator);       // state after update
    console.log("Original array:", array);              // optional reference to full array
    console.log("---------");

    return accumulator; // must return accumulator to carry forward in next iteration
}, {}); // initial accumulator is an empty object {}

console.log("Final Count:", countAll); // { pass: 4, fail: 2, skipped: 1 }
