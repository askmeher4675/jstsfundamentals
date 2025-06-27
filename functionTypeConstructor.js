//Constructor objetyc is used to create and initalize objects
function Person(name , age){
    this.name = name;
    this.age = age;
}

const person1 =  new Person("John",30);
let person2 = new Person("jane",25);

console.log(person1.name);//John
console.log(person1.age);//30

console.log(person1);//Person { name: 'John', age: 30 }
console.log(person2);//Person { name: 'jane', age: 25 }