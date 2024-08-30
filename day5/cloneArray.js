const cloneArray = (arr)=>{
   const  cloneArr = [];
    for(x of arr){
        cloneArr.push(x);
    }
    return cloneArr;
}

const newArr = cloneArray([4,35,6]);
console.log(newArr);