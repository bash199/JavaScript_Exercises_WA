//? Ex5.5 - Abbreviate two words.
//? Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
//? It should look like this:
//? Sam Harris => S.H
//? Patrick Feeney => P.F

const abbreviateTwoWords = (string) => {
   let array = string.split(' ');
   return array.map((el)=>{
      return el[0].toUpperCase()
   }).join('.');
};
console.log(abbreviateTwoWords('Sam Harris'));
console.log(abbreviateTwoWords('Patrick Feeney'));
console.log(abbreviateTwoWords('Bashir Tarif'));

