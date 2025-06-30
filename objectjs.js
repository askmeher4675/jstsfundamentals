//Declare a object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  isStudent: false,
};

console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);

console.log(typeof person);

// Change the property value

person.firstName = "Test";
console.log(person.firstName);

//add an additional property

person.phone = "5454545454";
console.log(person.phone);
console.log(person);

//delete an property
delete person.age;
console.log(person);
