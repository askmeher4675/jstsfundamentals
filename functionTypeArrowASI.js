//  runs without semicolon as well due to ASI(Automatic Semicolon Insertion)
//ASI by JavaScipt puts semicolon at the end of line break
//Good one to know but bad one to SKIP
const multiply3 = (a, b) => {
  let result = a * b;
  return "Output with out brackets " + result;
};
console.log(multiply3(2, 3));
