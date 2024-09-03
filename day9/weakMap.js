
const weakMap = new WeakMap();
let obj = {
    name:"kamlesh"
}

weakMap.set(obj,"self");
weakMap.set({name:"kamlesh"},"kamlesh")
console.log(weakMap.get(obj))
//obj = null;
console.log(weakMap.get({"name":"kamlesh"}))

