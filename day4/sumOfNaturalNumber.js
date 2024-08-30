const sumOfNumber = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("Sum of numbers is", sumOfNumber(6));

