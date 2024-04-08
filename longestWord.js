/*Write a function that takes a sentence as input and returns the longest word in the sentence. In case of a tie, return the first occurring longest word.
"jumped" */

const sentence = "The quick brown fox jumped over the lazy dog";

let sentenceStrings = sentence.split(" ");
let longestWord = sentenceStrings[0]; 

for (let i = 0; i < sentenceStrings.length; i++) {
    if (longestWord.length < sentenceStrings[i].length) { 
        longestWord = sentenceStrings[i]; 
    }
}
console.log(longestWord);
