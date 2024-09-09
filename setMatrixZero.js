var setZeroes = function(matrix) {
    const rows = new Set();
    const cols  = new Set();
    for(let i=0;i<matrix.length;i++){
        for(let k=0;k<matrix[0].length;k++){
            if(matrix[i][k]===0){
                rows.add(i);
                cols.add(k);
            }
        }
    }

    for(let i=0;i<matrix.length;i++){
        for(let k=0;k<matrix[0].length;k++){
            if(rows.has(i) ||cols.has(k)){
                matrix[i][k]=0;
            }
        }
    }

    return matrix;
};

//[[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
console.log(setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]))