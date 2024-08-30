const longestCommanPrefix = (str=[])=>{
    if(str.length<=0){
        return ""
    }
    let firstStr = str[0];
    let temp="";
    for(let i=1;i<str.length;i++){
        for(let k=0;k<firstStr.length;k++){
            if(firstStr.charAt(k)===str[i].charAt(k)){
                temp+=firstStr.charAt(k);
            }
          
        }
        firstStr=temp;
        temp="";
    }

    return firstStr;

}

console.log(longestCommanPrefix(["flower","flow","flight"]))