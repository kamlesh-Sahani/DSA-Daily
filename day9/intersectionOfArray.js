// intersection of array ;
//intersection == common
const arr= [2,2,4,52,1,3];
const arr2=[2,45,7,34,2,1];                                 
const intersection = new Set();
for(let i=0;i<arr.length;i++){
    if(arr2.includes(arr[i])){
        intersection.add(arr[i]);
    }
}
console.log(...intersection);