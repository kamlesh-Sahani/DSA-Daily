const linearSearch = (arr,target)=>{
    if(arr.length<=0){
        return -1;
    }
    for(let i=0;i<arr.length;i++){
        if(arr.at(i)===target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2,4,23,3,5],23));