// selection sort - select the minimum value and place it in last 
const selectionSort=(arr)=>{
    // arr =[4,2,5,11,0]
    for(let i=0;i<arr.length;i++){
        let minIndex = i;

        for(let k=i+1;k<arr.length;k++){
            if(arr[minIndex]>arr[k]){
                [arr[minIndex],arr[k]]=[arr[k],arr[minIndex]]
            }
        }
    }
    return arr;
}


console.log(selectionSort([2,4,2,5,11,0]))