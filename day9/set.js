// set store the unique value only ...
const set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.delete(2)
set.add("kamlesj")
console.log(...set.entries());
console.log(set.size)

// union of arrays 
const arr= [2,2,4,52,1,3];
const arr2=[2,45,7,34,2,1];

const unionSet = new Set([...arr,...arr2]);
console.log(...unionSet,"union of two array ")

// intersaction of array ;

