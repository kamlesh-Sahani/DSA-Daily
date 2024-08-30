const numberOfDigit = (n)=>{
    if(n<0){
        n = -n;
    }
    let count =0;
     while(n>0){
        count ++;
        n = Math.floor(n/10);

     }
    return count;
}
console.log("Number of digites are ,",numberOfDigit(-3263));