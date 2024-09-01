const floorAndCielValue= (arr,target)=>{
    let start=0,end=arr.length-1,mid;
    let floorVal=-1,cielVal=-1;

    // [2,4,5,7,8,9]
    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            floorVal =mid;
            cielVal=mid;
            return [floorVal,cielVal];
        } 
        else if(arr[mid]>target){
            end=mid-1;
            cielVal=mid;

        }else{
            floorVal=mid;
            start=mid+1;
        }

    }

    return [floorVal,cielVal];
}

console.log(floorAndCielValue([2,4,5,7,8,9],3)) // floor=0,ciel=1(index)
console.log(floorAndCielValue([2,4,5,7,8,9],5))// floor=2,ciel=2(index)