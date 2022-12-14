//? Ex5.4 - To Weird Case
//? Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
//? string with all even indexed characters in each word upper cased, and all odd indexed
//? characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
//? index is even, therefore that character should be upper cased.
//? The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
//? be present if there are multiple words. Words will be separated by a single space(' ').
//? Examples:
//? toWeirdCase( "String" );//=> returns "StRiNg"
//? toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
   let array = string.split(' ');
   return array.map((el,i)=>{
      let arr = el.split('')
      return arr.map((element,index)=>{
         if( index == 0 || index % 2 == 0 ) {   
            element = arr[index].toUpperCase();
         }
         if(  index % 2 !== 0 ) {   
            element = arr[index].toLowerCase();
         }
         return element
      }).join('');
   }).join(' ');
};
console.log(toWeirdCase("String"));
console.log(toWeirdCase("sTrInG"));
console.log(toWeirdCase("wEiRd sTrInG cAsE"));
console.log(toWeirdCase("WEiRd sTrInG case"));


