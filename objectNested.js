//Declare a object
let person = {
    firstName : "John",
    grade: 12,
    subjects :{
        math : "A",
        science : "B"
    }
};

console.log(person);
console.log(person.subjects);

console.log(subjects); //ReferenceError: subjects is not defined
// as directly we cannnot access the subjects