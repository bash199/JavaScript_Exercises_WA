//? Ex6.3 - organize strings
//? Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.
//? Examples:
//? a = "xyaabbbccccdefww"
//? b = "xxxxyyyyabklmopq"
//? longest(a, b) -> "abcdefklmopqwxy"
//? a = "abcdefghijklmnopqrstuvwxyz"
//? longest(a, a) -> "abcdefghijklmnopqrstuvwxyz

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq"
let a2 = "abcdefghijklmnopqrstuvwxyz"

const longest = (s1,s2) => {
   let str =s1.concat(s2);
   let arr=str.split('').sort();
   let result =[];
   for(let i=0; i<arr.length;i++){
      if(result.indexOf(arr[i])===-1){
         result.push(arr[i]); 
      }
   };
   return result.join('');
};
console.log(longest(a,b));
console.log(longest(a2,a2));

console.log('---↑↑↑-longest-↑↑↑------↓↓↓-longest2-↓↓↓-----');

//!  or with set:
const longest2 = (s1,s2) => {
   let str =new Set(s1.concat(s2));
   let res =[...str].join('')
   return res
};
console.log(longest2(a,b));
console.log(longest2(a2,a2));
