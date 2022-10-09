//* Ex6.4 - isogram
//? An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
//? a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//? isIsogram("Dermatoglyphics") == true
//? isIsogram("aba") == false
//? isIsogram("moOse") == false // -- ignore letter case


function isIsogram(string){
   let str = string.toLowerCase();
   let count ={}, result=0; 
   for (let i = 0; i < str.length; i++) {
      if(!count[str[i]]){
         count[str[i]] = 1;
         // console.log(count);
      }
      else{
         if(count[str[i]]===1){
            result += 1;
            
         }
         count[str[i]]+= 1;
      }  
   }
   if(result==0){
      return true;
   }
   else{
      return false;
   }
   // return result;
};
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

