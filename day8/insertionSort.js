const insertionSort= (arr)=>{
    // arr=[23,1,4,2,3,22,0]

    for(let i=0;i<arr.length;i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){
            let temp=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp;
            j--;
        }

    }
    return arr;
}

console.log(insertionSort([23,1,4,2,3,22,0]));