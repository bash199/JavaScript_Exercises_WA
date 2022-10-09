//* Ex6.2 - Counting Duplicates
//? Count the number of Duplicates
//? Write a function that will return the count of distinct case-insensitive alphabetic characters and
//? numeric digits that occur more than once in the input string. The input string can be assumed to
//? contain only alphabets (both uppercase and lowercase) and numeric digits.
//? Example
//? "abcde" -> 0 # no characters repeats more than once
//? "aabbcde" -> 2 # 'a' and 'b'
//? "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//? "indivisibility" -> 1 # 'i' occurs six times
//? "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//? "aA11" -> 2 # 'a' and '1'
//? "ABBA" -> 2 # 'A' and 'B' each occur twice

console.log(countingDuplicates("aabBcde"));

function countingDuplicates(string){
   let str = string.toLowerCase();
   let count ={}, result=0; 
   for (let i = 0; i < str.length; i++) {
      if(!count[str[i]]){
         count[str[i]] = 1;
         console.log(count);
      }
      else{
         if(count[str[i]]===1){
            result += 1;
            console.log(result);
         }
         count[str[i]]+= 1;
      }  
   }
   return result;
};

















































































































// const duplicateCount2=(string)=>{
//    let str = string.toLowerCase().split('')
//    let count = {};
//    let result =0;
//    for(let i=0; i<str.length; i++){
//       if(!count.hasOwnProperty([str[i]])){
//          count[str[i]]=0;
//          console.log(count);
//       }
//       else{
//         if( count[str[i]]===0){
//             res+=1;
//            console.log(count);
//         }
//         count[str[i]]=count[str[i]] +1
//       }
//    }
   
//    return res;
// };
// console.log(duplicateCount("aabbcde"));


