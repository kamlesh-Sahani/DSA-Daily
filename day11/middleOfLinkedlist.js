class Node{
    constructor(data){
        this.data=data;
        this.next = null;
    }
}

// 3,4,5,6,7
class LinkedList{
    constructor(){
        this.head=null; 
    }

    addFirst(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }  
        newNode.next = this.head;
        this.head=newNode;
    }
    middle(){
        let current = this.head;
        for(let i=0;i<Math.floor(this.size()/2);i++){
            current=current.next;
        }
        console.log(current.data,"middle data")
    }
    middle2(){
        let slow= this.head;
        let fast = this.head;
        while(fast && fast.next){
           fast=fast.next.next;
            slow = slow.next;
        }
        console.log(slow.data,"middle value using middle2")
    }
    print(){
        let  current = this.head;
        while(current){
            console.log(current.data,"data");
            current=current.next;
        }

    }

    size(){
        let current = this.head;
        let count=0;
        while(current){
            count++;
            current=current.next;

        }
        return count;
    }
}


const list = new LinkedList();
list.addFirst(10);
list.addFirst(11);
list.addFirst(103);
list.addFirst(112);
list.addFirst(1022);
list.addFirst(1133);

list.addFirst(120);
list.addFirst(811);
list.print();
console.log("------------");
console.log(list.size(),"size");
list.middle();
list.middle2();

