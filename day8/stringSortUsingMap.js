const stringSortUsingMap = (str)=>{
    const map = new Map();
    for(ch of str){
        map.set(ch,(map.get(ch)||0)+1);
    }
    const sortedMapKey =[...map.keys()].sort();

    let sortedString="";
    for (ch of sortedMapKey){
        sortedString+=ch.repeat(map.get(ch));

    }

    return sortedString;
}

console.log(stringSortUsingMap("tree"))