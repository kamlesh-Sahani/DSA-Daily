var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let ones = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == 1) {
            ones++;

        }
        if (nums[i] !== 1 || i == nums.length - 1) {
            if (max < ones) {
                max = ones;

            }
            ones = 0;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))