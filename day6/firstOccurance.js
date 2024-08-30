const firstOccurance = (str,subStr)=>{
    //str = leetcode , subStr = etc
 
    for(let i=0;i<str.length;i++){
      let  flag=true;
        for(let k=0;k<subStr.length;k++){
            if(str[k+i]!==subStr[k]){
                flag=false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
}
console.log(firstOccurance("leetcode","etc"));