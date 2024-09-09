var moveZeroes = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            continue;
        }
        let temp = nums[count];
        nums[count]=nums[i];
        nums[i]=temp;
        count ++;
    }
    return nums;
};


console.log(moveZeroes([0,1,0,3,12]))