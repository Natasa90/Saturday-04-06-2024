/* OUTPUT: 

[
    { id: 1, name: "John", age: 25, occupation: ["Developer", "Manager"] },
    { id: 2, name: "Jane", age: 28, occupation: "Designer" }
]

*/

const records = [
    { id: 1, name: "John", age: 25, occupation: "Developer" },
    { id: 2, name: "Jane", age: 28, occupation: "Designer" },
    { id: 1, name: "John", age: 25, occupation: "Manager" }
];
let recordMap = {};

for (let i = 0; i < records.length; i++) { 
    let record = records[i];  

    if (recordMap[record.id] === undefined) { 
        recordMap[records.id] = records.id;
    }
}
console.log(recordMap); 