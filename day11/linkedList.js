class Node {
    constructor(data){
        this.data=data;
        this.next= null;
    }
}

// head,3,4,7,83,2

class LinkedList {
    constructor(){
        this.head=null;
    }

    addFirst(data){
        const newNode = new Node(data);
         newNode.next = this.head;
         this.head = newNode;
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
            current = current.next;
        }
        return count;
    }
    insertAt(index,data){
        if(index<0 || index>this.size()){
            console.log("index is not valid ");
            return;
        }
        if(index===0){
            const newNode = new Node(data);
            newNode.next=this.head;
            this.head=newNode;
            return;
        }

        let current = this.head;
        let previous= null;
        for(let i=0;i<index;i++){
            previous=current;
            current=current.next;
        }
        const newNode  = new Node(data);
        newNode.next = current;
        previous.next = newNode;


    }

    append(data){
        const newNode = new Node(data);
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }

    remove(data){
        let current = this.head;
        let previous=null;
        while(current){
            previous=current;
            current= current.next;
            if(current.data==data){
                previous.next=current.next;
                return;
            }
        }
    }
}

const list = new LinkedList();
list.addFirst(6);
list.addFirst(11);
list.addFirst(40);
list.addFirst(33);
list.addFirst(20);
list.print();
list.insertAt(2,108);
console.log(list.size(),"size")
console.log("-----------")
list.append(111);
list.print();
console.log(list.size(),"size")
console.log("--------------");
list.remove(108);
list.print()
console.log(list.size(),"size")
console.log("--------------");