const map = new Map();
map.set("name","kamlesh");
map.set("age",19);
map.set(true,"developer");
console.log(map,"map");
console.log(map.has("name"));
map.forEach((value,key)=>{
    console.log(`${key}:${value}`)
})

console.log("keys",map.keys());