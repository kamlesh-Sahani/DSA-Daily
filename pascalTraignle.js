var generate = function (numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    const angle = [];
    angle.push(1);
    if (i > 0) {
      let temp =Array.from(triangle[i - 1]);
      for (let k = 0; k < temp.length; k++) {
        if (temp[k] && temp[k + 1]) {
          angle.push(temp[k] + temp[k + 1]);
        }

      }
      angle.push(1);
     
    }
    triangle.push(angle);
  }
  return triangle;
};

console.log(generate(5))