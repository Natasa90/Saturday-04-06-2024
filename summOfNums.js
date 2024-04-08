/* Sum of Digits
Objective: Write a function that takes a non-negative integer and returns the sum of its digits. If the sum contains more than one digit, continue reducing in this way until a single-digit number is produced.
*/

/* STEP 1: number to string; 
STEP 2: string to separate strings of nums; 
STEP 3: string to number;  
STEP 4: loop through string of numbers and make every string number again; 
STEP 5: sum nums up; 
STEP 6: if sum is still 2 numbers, add IF statement for calculating the rest of the numbers; 
STEP 7: turn sum back to a string; 
STEP 8: split that string; 
STEP 9: loop through string of numbers and make every string number again; 
STEP 10: sum it up!

*/ 
const number = 56;

let stringNum = number.toString(); 
let stringOfNums = stringNum.split("");

let sum = 0; 

for (let i = 0; i < stringOfNums.length; i++) { 
    let arrayOfNums = Number(stringOfNums[i]);
    sum += arrayOfNums; 
}

    if (sum > 10 ) { 
        
        let stringSum  = sum.toString();
        let stringOfSums = stringSum.split("");
        let newSum = 0;

        for (let j = 0; j < stringOfSums.length; j++) {
            let sumArray = Number(stringOfSums[j]); 
            newSum += sumArray; 
            console.log (newSum);
        }

    } else {
        console.log(sum);
    }



