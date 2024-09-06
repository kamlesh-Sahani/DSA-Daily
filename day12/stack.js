class Stack{
    constructor(){
        this.stack = [];
    }
    push(item){
        this.stack.push(item);
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack.pop();
    }
    peek(){
        this.stack[this.stack.length-1];
    }
    isEmpty(){
        return this.stack.length===0;
    }
    size(){
        return this.stack.length;
    }
    print(){
        for(let i=0;i<this.stack.length;i++){
            console.log("stack data:",i,":",this.stack[i]);
        }
    }
}



const stack = new Stack();
stack.push(10);
stack.push(1);
stack.print();
console.log("----after the poping items");
stack.pop();
stack.print();
console.log("is empty ",stack.isEmpty());
console.log("size ",stack.size());