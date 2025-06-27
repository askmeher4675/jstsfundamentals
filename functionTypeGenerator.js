// Generator fucntion is denoted with an Astrisk(*)
//yield -> used to pause execution and return intermediate reuslts
//iterator.next() -> resumes function fromwhere it stopeed

function * generatorFunction(){
    yield "Hello";
    yield "Hi";
    yield "!";
}

// 1️⃣  Create the iterator
const iterator = generatorFunction();

/*
 * 2️⃣  Pull values out one‐by‐one with .next().
 *      Each call returns an object:  { value: <yielded-value>, done: <boolean> }
 */

console.log(iterator.next().value); // value: "Hello"
console.log(iterator.next()); // { value: "Hi",    done: false }
console.log(iterator.next()); // { value: "!",     done: false }
console.log(iterator.next().done); // returns true, if its finished
