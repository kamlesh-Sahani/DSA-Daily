function node(data){
    this.data = data;
    this.next=null;
}

const head = new node(4);

const node1 = new node(6);
head.next=node1;
console.log(node1);
console.log(head);