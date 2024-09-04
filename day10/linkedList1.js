class Node {
    constructor(data){
        this.data = data;
        this.next= null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertAtHead (data){
        const newNode = new Node(data);
        newNode.next=this.head;
       this.head=newNode; 
    }
}

const list  = new LinkedList();
list.insertAtHead(32);
list.insertAtHead(3);


console.log(list);