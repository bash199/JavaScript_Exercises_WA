//? Ex1.1 - Yes or No 
//? Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const yesOrNo = (boolean) => {
   if((boolean===true)){
      return 'YES';
   }
   return 'NO';
};

let result =yesOrNo(false);
console.log(result);