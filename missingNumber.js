var missingNumber = function(nums) {
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }

    return  ((nums.length+1)*nums.length/2)-sum;
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber( [9,6,4,2,3,5,7,0,1]))