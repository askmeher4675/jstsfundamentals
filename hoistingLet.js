// var gfives undefined withoout error
//let gives undefined with Reference Error

if (true) {
  console.log(m3); // ReferenceError: m3 is not defined
}
console.log(m3);
let m3 = "Out of Scope block"; //ReferenceError: Cannot access 'm3' before initialization
