/* String to array of names; 
Loop through the array of names;
Make first letter in every name upper case; 
An array of names back to the string again; */

let names = "natasa milutin jana milica"; 

let arrayOfNames = names.split(""); 

for (let i = 0; i < names.length; i++) { 
    arrayOfNames = arrayOfNames[i].charAt[0].toUpperCase() + arrayOfNames[i].slice(1); 
}

console.log(arrayOfNames.join(" "));