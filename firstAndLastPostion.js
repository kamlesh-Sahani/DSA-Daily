var searchRange = function(nums, target) {
    let positionArr=[-1,-1];
    let count =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            positionArr[count]=i;
            if(count===0){
                positionArr[count+1] =i;
                count++;
            
            }
          
        }
    }

    return positionArr;
};
console.log(searchRange([5,7,7,8,8,10],8))