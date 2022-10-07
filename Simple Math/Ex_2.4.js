//? Ex2.4 - Unique
//? There is an array with some numbers. All numbers are equal except for one. Try to find it!
//? findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//? findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//? It’s guaranteed that array contains at least 3 numbers.

let arr =[ 1, 1, 1, 2, 1, 1 ];
const findUniq = (array) => {
   let first =array[0];
   if(first !== array[1] && first !== array[2]){
      return first;
   }
   for(let i=1; i<array.length; i++){
      if (array[i] !== first) {
         return array[i]
      }
   }
};
console.log(findUniq(arr));
