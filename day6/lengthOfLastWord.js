const lengthOfLastWord = (str)=>{
    return str.trim().split(" ").at(-1).length;
}

console.log(lengthOfLastWord("   this   is  string     "));