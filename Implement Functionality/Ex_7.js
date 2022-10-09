//* Ex7 - Implement The Following JS Methods -
//? Implement the following methods -
//? - Filter
//? - ForEach
//? - Map
//? Using only for(), array and objects (without other js methods)
//? Find Bugs \ Debug Code
//? Bug !!!!!
//* *Filter* method Implementation
const myFilter = (array,filterFunc) => {
   let filterArr=[];
   for(let i=0; i<array.length; i++){
      let result  =  filterFunc(array[i], i, array);
      if(result){
         filterArr.push(array[i]);
      }
   };
   return filterArr;
};

let array2 = [1,2,3,4,5]
console.log(myFilter(array2,n => n%2==0));

//* *ForEach* method Implementation
const myForEach = (array,ForEachFunc) => {
   for(let i=0; i<array.length; i++){
      const result  =  ForEachFunc(array[i],i,array);
      console.log(result)
   };
};

let array3 = [1,2,3,4,5]
console.log(myForEach(array3,(n)=>n**2));

//* *Map* method Implementation
const myMap = (array,callBackFunc) => {
   let arr=[];
   for(let i=0; i<array.length; i++){
      const result  =  callBackFunc(array[i],i,array);
      arr.push(result);
   };
   return arr;
};
let array = [1,2,3,4,5]
let res = myMap(array,(n)=>n*2)
console.log(res);