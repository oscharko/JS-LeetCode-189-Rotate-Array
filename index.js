let nums = [-1,-100,3,99], k = 2
// [3,99,-1,-100]

const rotate = function(nums, k) {
  for(i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}

console.log(rotate(nums, k))