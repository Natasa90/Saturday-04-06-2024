/*[
    { genre: "fiction", count: 45 },
    { genre: "nonfiction", count: 30 },
    { genre: "fantasy", count: 25 }
] */

const bookGenres = {
    fiction: 45,
    nonfiction: 30,
    fantasy: 25
};

let arrayOfBooks = []; 


for (key in bookGenres) { 
    arrayOfBooks.push({genre: key, count: bookGenres[key]});
}
console.log(arrayOfBooks[0]);

    
