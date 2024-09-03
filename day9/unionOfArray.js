// union of arrays 
const arr= [2,2,4,52,1,3];
const arr2=[2,45,7,34,2,1];

const unionSet = new Set([...arr,...arr2]);
console.log(...unionSet,"union of two array ")
