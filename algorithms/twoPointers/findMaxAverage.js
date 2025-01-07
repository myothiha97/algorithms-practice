var findMaxAverage = function (nums, k) {
  let curr = 0;
  let left = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }
  let maxSumAverage = curr / k;

  for (let i = k; i < nums.length; i++) {
    curr = curr - nums[left] + nums[i];
    maxSumAverage = Math.max(maxSumAverage, curr / k);
    left++;
  }

  return maxSumAverage;
};

console.log({ maxAverage: findMaxAverage([1, 5, 4, 6, 2, 9], 4) });
