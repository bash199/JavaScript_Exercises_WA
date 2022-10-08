//? Ex4.1 - Fibonacci -
//? “Write a function to return an n element in Fibonacci sequence” is one of the most common
//? questions you can hear during the coding challenge interview part. In this blog post I’m going to walk through the two of the most typical solutions for this problem and also cover a dreadful (for most of novice developers) topic of time complexity.
//? “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
//? called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones.”
//? Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
//? this:
//? 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
//? or this:
//? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function fibonacci(startAt,length){
   let fiboArr=[];
   if (startAt===0) {
      fiboArr=[0,1]
      for (let k = 0; k < (length-1); k++) {
         fiboArr.push(fiboArr[k]+fiboArr[k+1])
      }
   }
   else{
      fiboArr=[1,1]
      for (let k = 0; k < (length-1); k++) {
         fiboArr.push(fiboArr[k]+fiboArr[k+1])
      }
   }
   return fiboArr;
};
console.log(fibonacci(1,13));
 

