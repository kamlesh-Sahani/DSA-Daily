const mergeStringAlternative = (str1,str2)=>{
    let newStr ="";
    let str1Pointer = 0;
    let str2Pointer=0;
    for(let i=0;i<(str1.length +str2.length); i++){
        if(i%2==0 || str2.length<i){
            newStr+=str1.charAt(str1Pointer);
            str1Pointer++;
        }
        if(i%2!=0 || str1.length<i){
            console.log(i);
            newStr+=str2.charAt(str2Pointer);
            str2Pointer++;
        }
    }
    return newStr;

}
console.log(mergeStringAlternative("abckla","pqr"));