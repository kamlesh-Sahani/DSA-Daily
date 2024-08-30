const  sumOfDigit  =(n)=>{
    //122=>1+2+2;
    let temp =n;
    let sum =0;
    while(temp>0){
        num = temp%10;
        sum+=num;
        temp=Math.floor(temp/10);
    }
    return sum;
}

console.log("sum of digit is ",sumOfDigit(122));