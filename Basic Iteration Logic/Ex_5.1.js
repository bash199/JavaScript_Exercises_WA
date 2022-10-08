//? Ex5.1 - trimming string.
//? It's pretty straightforward. Your goal is to create a function that removes the first and last
//? characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function trimming(string){
   if(string.length==2){
      return string
   }
   else{
      let array = string.split('');
      array.pop();
      array.shift();
      array.join('')
      return array.join('');
   }
};
let str='ABaaaaBA';
console.log(trimming(str));




