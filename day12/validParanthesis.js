const isValid = (str)=>{
    const obj ={
        "(":")",
        "{":"}",
        "[":"]"
    }

    //str="))))"
    const stack = [];

    for(let i=0;i<str.length;i++){
         if(obj.hasOwnProperty(str.charAt(i))){
            stack.push(obj[str.charAt(i)]);
        }else{
             if(stack.length===0 || stack.at(-1)!==str.charAt(i)){
                 return false;
            }
             stack.pop();
    }
    }

    return stack.length===0;
}


console.log(isValid("{[()]}"));
console.log(isValid("{)))))"));