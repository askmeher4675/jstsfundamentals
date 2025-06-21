//acc -> accumulator, num -> the variable , 0 -> accumulator value is 0
let numbers = [1,2,3,4];
let sum = numbers.reduce((acc,num)=> acc + num , 0);
console.log(sum);// Ouput : 10

let sum2 = numbers.reduce((acc,num)=> acc + num , 10);
console.log(sum2); // Ouput : 20 , accumulator + sum of all numbers


//acc+1 : acc -> If r is 'pass', then return acc + 1. Otherwise, return acc 
// ternary operator -> condition ? exp if true : exp if false
let results = ['pass','fail','pass'];
let passCount = results.reduce((acc,r) => r === 'pass' ? acc+1 : acc,0);
console.log(passCount);

let failCount = results.reduce((acc,r) => r === 'fail' ? acc+1 : acc,0);
console.log(failCount);