//? Ex2.6 - Years and Centuries
//? The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
//? Task :
//? Given a year, return the century it is in.
//? Input , Output Examples ::
//? centuryFromYear(1705) returns (18)
//? centuryFromYear( 1900) returns (19)
//? centuryFromYear(1601) returns (17)
//? centuryFromYear(2000) returns (20)

// console.log(1600%100);

function yearsAndCenturies(number){
   let century ;
   if(number>=1&&number<=100){century = 1;}
   else if(number>=101){
      if ( number % 100 !==0) {
         century = (Math.floor(number/100)) +1 ;
      }
      else if(number %100 ===0 ) {
         century = number/100 ;
      }
   };
   return century;
};
console.log(yearsAndCenturies(50));
