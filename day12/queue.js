class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
    }

    dequeue(){
        return this.queue.shift();
    }
    front(){
        return this.queue[0];
    }
    isEmpty(){
        return this.queue===0;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(22);
console.log(queue);