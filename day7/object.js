const countAllPlayer = (data)=>{
    
    if(data==null){
        return playerCountObj;
    }
    for(key in data){
        if(key==="name"){
            for(let i=0;i<data[key].length;i++){
                
               playerCountObj[data[key][i]]=(playerCountObj[data[key][i]]|| 0 )+ 1;
            }
        }
        if(key==="next"){
            countAllPlayer(data[key]);
        }
    }
    return playerCountObj;
}

const playerCountObj= {} //"p1":2
const data = {
    name:["p1","p4"],
    next:{
        name:["p3"],
        next:{
            name:["p1","p2","p4"],
            next:{
                name:["p2","p3","p5"],
                next:null
            }
        }
    }
}

console.log(countAllPlayer(data));