const fibonacci = (n)=>{
    //0,1,1,2,3,5....
    let prev=0,current=1,next;
    console.log(prev);
    console.log(current);
    for(let i=0;i<=n;i++){
        next = prev+current;
        console.log(next);
        prev=current;
        current=next;
    }
}

fibonacci(5);