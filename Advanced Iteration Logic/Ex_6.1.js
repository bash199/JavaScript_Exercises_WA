//* Ex6.1 - Mumbling
//? This time no story, no theory. The examples below show you how to write function
//? accum:
//? Examples:
//? accum("abcd") -> "A-Bb-Ccc-Dddd"
//? accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//? accum("cwAt") -> "C-Ww-Aaa-Tttt"
//? The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(string){
   let array = string.split('');
   let word =[];
   for(let i = 0; i < array.length; i++) {
      word.push(array[i].toUpperCase() + Array(i+1).join(array[i].toLowerCase()));
   }
   return word.join('-');
}; 
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));



