//? Ex5.7 - shortest words
//? Simple, given a string of words, return the length of the shortest word(s).
//? String will never be empty and you do not need to account for different data types.
let str = 'ass babe goood nikeee adidass boozzzzz marijuana';
const shortestWords = (string)=>{
   return string.split(' ').sort( (a,b) => a.length-b.length).shift().length
};
console.log(shortestWords(str));

