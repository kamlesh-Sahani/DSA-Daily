var searchInsert = function(nums, target) {
    if(nums[nums.length-1]<target){
        return nums.length;
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>target){
            return i;
        }
        if(nums[i]===target){
            return i;
        }
      
    }
    return -1;
};

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))