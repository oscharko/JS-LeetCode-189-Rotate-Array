let nums = [-1, -100, 3, 99], k = 2

const rotate = function(nums, k) {
  /*
  # Description for array v:
  #   - v[0] = input array and also output rotate array
  #   - v[1] = rotate steps
  #   - v[2] = shifted array-elements
  */
  let v = [nums, k %= nums.length, 0]
  v[2] = v[0].splice(0, v[0].length - v[1]);
  for (i = 0; i < v[2].length; i++) {
    nums.push(v[2][i])
  }
  return v[0]
}

console.log(rotate(nums, k))