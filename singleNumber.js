var singleNumber = function(nums) {
    
    for(let i=0;i<nums.length;i++){
        let count =0;
        for(let  k=0;k<nums.length;k++){
            if(i!=k){
                if(nums[i]==nums[k]){
                    count++
                }
            }
          
        }
    
        if(count===0){
            return nums[i];
        }
    }
};

console.log(singleNumber([2,2,4]))