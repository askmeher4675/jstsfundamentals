// var gfives undefined withoout error
//let gives undefined with Reference Error

//  var is hoisited at top and its value is undefined
//let is also hoisted but it is not intialized , hence throws an error

// ─── HOISTING CHEAT-SHEET ────────────────────────────────────────────────
// var   → hoisted & *initialised* to undefined  ➜ access = undefined (no error)
// let   → hoisted but *uninitialised* (TDZ)     ➜ access = ReferenceError
// const → same as let (TDZ)                     ➜ access = ReferenceError
// ─────────────────────────────────────────────────────────────────────────

// avoid using var , unless its a legacy application

if (true) {
  console.log(m3); // undefined
}
console.log(m3);
var m3 = "Out of Scope block"; //undefined

//in the below example, this  happens as it is totally not defined in the file
console.log(m1); // ReferenceError: m1 is not defined
