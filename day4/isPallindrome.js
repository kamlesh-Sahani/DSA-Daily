const isPalindrome = (n)=>{
    if(n<0){
        return false;
    }
    let revNum=0,temp=n;

    //123 - 321
 //   0*10+3 -- 3 , 3*10+2,32
 while(temp>0){
    console.log(temp);
    lastNumber = temp%10;
    revNum = revNum*10 +lastNumber;
    temp =Math.floor(temp/10);
 }
 return revNum===n;
}

console.log(isPalindrome(1213)?"numner is  pallindrome":"number not  is pallindrome");