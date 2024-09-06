class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current=current.next;
        }
       current.next=newNode;
    }

    reverse(){
       // 1->2->3->5->44-3;
       let prev=null,current,Next;
       current=this.head;
       while(current){
        Next = current.next;
        current.next = prev;
        prev=current;
        current=Next;
        
       }

       this.head=prev;
       


    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data,"data");
            current=current.next;
        }
    }
}

const list = new LinkedList();
list.append(2);
list.append(32);
list.append(22);
list.append(34);
list.print();
console.log("------------after reversing------");
list.reverse();
list.print();

