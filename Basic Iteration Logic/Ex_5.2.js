//? Ex5.2 - String Repeat
//? Write a function called repeat_str which repeats the given string src exactly count times.
//? repeatStr(6, "I") // "IIIIII"
//? repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


const repeatStr = (number, string) =>{
   let str = '';
   for (let index = 0; index < number; index++) {
       str += string;
   }
   return str;
};
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));