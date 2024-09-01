const bubbleSort = (arr) => {
    //arr=[3,52,1,4,2];
    let swapped;
    do {
        swapped=false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);
    return arr;

}

console.log(bubbleSort([3, 52, 1, 4, 2]))
console.log(bubbleSort([3, 2, 1, 4, 2]))