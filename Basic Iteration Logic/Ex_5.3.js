//? Ex5.3 - To Camel Case
//? Complete the method/function so that it converts dash/underscore delimited words into camel
//? casing. The first word within the output should be capitalized only if the original word was
//? capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//? Examples:
//? toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//? toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toCamelCase = (string) => {
   string = string.split('');
   let res = string.map((el,i)=>{
      if( el == '-' || el == '_' ){
         el = string[i+1].toUpperCase();
         string.splice(i+1,1);
      }
      return el
   }).join('');
   return res;
};
console.log( toCamelCase("The_stealth_warrior"));

