//const functionName = (parameters) => expression
// this binding

// simple arrow
const add = (a,b)=>a+b;
console.log(add(3,5));

//arrow function with a Single Paramter
//single paramter , doesnot require parenthesis
//can be used as well
const greet = name => "hello, "+name;
console.log(greet("Test"));

const bye = (name) => "bye, "+name;
console.log(bye("Test"));

//arrow function with multiple lines
// can be used inside {} and return statement should be used explicitly

const multiply = (a,b)=>{
    let result = a*b;
    return result; // without return type , Output : undefined
};
console.log(multiply(2,3));

const multiply2 = (a,b)=>{
    let result = a*b;
    return "Output "  + result; // without return type , Output : undefined
};
console.log(multiply2(2,3));


// runs without semicolon as well due to ASI(Automatic Semicolon Insertion)
//ASI by JavaScipt puts semicolon at the end of line break
//Good one to know but bad one to SKIP
const multiply3 = (a,b)=>{
    let result = a*b
    return "Output with out brackets "  + result // without return type , Output : undefined
}
console.log(multiply3(2,3));




