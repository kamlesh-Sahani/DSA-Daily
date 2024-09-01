const binarySearch = (arr,target )=>{
    // arr=[2,5,7,9]
    let start=0,end=arr.length-1,mid;
    while(start<=end){
        mid=Math.floor((start+end)/2);
        if(target===arr[mid]){
            return mid;
        }
        else if(target>arr[mid]){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return -1;
}

console.log(binarySearch([3,5,8,11,13],8));
console.log(binarySearch([3,5,8,11,13],200));
console.log(binarySearch([3,5,8,11,13],3));
console.log(binarySearch([3,5,8,11,13],11));