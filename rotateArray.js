var rotate = function(nums, k) {
    const rotateArr = [];
    for(let i=0;i<nums.length;i++){
        rotateArr[(i+k)%nums.length] = nums[i]
    }

    return rotateArr;
};

console.log(rotate([1,2,3,4,5,6,7],3))