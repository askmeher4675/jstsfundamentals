// .sort() without a compare function
//  uses dictionary (lexicographical) order, just like how words are sorted in a dictionary.
// Breakdown:

// Compare "100" vs "20"
// → first characters: '1' (ASCII 49) vs '2' (ASCII 50)
// → '1' < '2' → so "100" comes before "20"
// Then "30" is compared to the rest similarly.

let arr = [100, 20, 30];
let arrSorted = arr.sort();
console.log(arrSorted); // Output : [ 100, 20, 30 ]

/****************
 * NUMERIC SORTING
 *****************/
let arrNum = [100, 20, 30];
let arrNumSorted = arrNum.sort((a, b) => a - b);
console.log(arrNumSorted); // output : [ 20, 30, 100 ]

/************EOF Numeric Sorting */

let arrMixed = [100, "banana", 20, 30, "apple"];
let arrMixedSorted = arrMixed.sort();
console.log(arrMixedSorted); // Output : [ 100, 20, 30, 'apple', 'banana' ]

let arrMixed2 = [100, "banana", 20, 30, "apple", true, 1, 2, 3, 4, 5, 5];

let arrMixed2Sorted = arrMixed2.sort();

console.log(arrMixed2Sorted); // Output : [ 100, 20, 30, 'apple', 'banana', true ]

let m3 = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 8, 9, 9, 99, 78];

let m34 = m3.sort();

console.log(m34);
