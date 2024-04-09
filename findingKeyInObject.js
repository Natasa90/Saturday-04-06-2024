/* INPUT: 

const person = {
    name: "John Doe",
    age: 30,
    country: "USA"
};

OUTPUT: 

["name", "age", "country"] */

const person = {
    name: "John Doe",
    age: 30,
    country: "USA"
};

let keys = Object.keys(person);
console.log(keys);