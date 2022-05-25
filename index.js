let nums = [-1,-100,3,99], k = 2
// [3,99,-1,-100]

function arrayRotate(nums, k) {
  /*
  # Description for array v:
  #   - v[0] = runner
  #   - v[1] = input original array and also output rotate array
  #   - v[2] = rotate steps
  */
  let v = [0,nums,k]
  while(v[0] < v[2]){
    v[1].unshift(v[1].pop());
    v[0]++
  }
  return v[1];
}

console.log(arrayRotate(nums, k))