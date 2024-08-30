const missingNumber = (arr)=>{
     // arr=[0,3,1] , sum = 0+3+1=4
     // 3*4/2 -4 = 
     let sum =0;
     for(let i=0;i<arr.length;i++){
        sum+=arr[i];
     }

     return (arr.length*(arr.length+1)/2 - sum);
}

console.log(missingNumber([1,3,0,4]))