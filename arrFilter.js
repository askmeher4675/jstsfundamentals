let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers); //Output : [ 2, 4, 6 ]

let n1 = [1, 2, 3, 4, 5, 6, 7];
let e1 = n1.filter((num) => num > 7);
console.log(e1); // Output : []

let results = [
  { id: 1, status: "pass" },
  { id: 2, status: "fail" },
  { id: 3, status: "pass" },
];
let failedTests = results.filter((r) => r.status === "fail");
console.log(failedTests);

let testCases = [
  { testcase: "smoke", status: "pass" },
  { testcase: "sanity", status: "fail" },
  { testcase: "smoke", status: "fail" },
];

let failedSmokeTests = testCases.filter(
  (r) => r.testcase === "smoke" && r.status === "fail",
);
console.log(failedSmokeTests);
