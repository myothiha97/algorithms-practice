var myMinStartValue = function (nums) {
  let startValue = null;
  // O(N)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      startValue = nums[i];
      break;
    }
  }
  if (!startValue) {
    return -1;
  }

  let minValue = 1;
  // O(N)
  while (minValue < 1) {
    let currMin = Number.MAX_VALUE;
    let sums = 0;
    for (let i = 0; i < nums.length; i++) {
      let currSum;
      if (i === 0) {
        currSum = sums + startValue + nums[i];
      } else {
        currSum = sums + nums[i];
      }
      currMin = Math.min(currSum, currMin);
      sums = currSum;
    }
    minValue = Math.max(currMin, minValue);
    if (minValue > 0) {
      return startValue;
    }
    startValue++;
  }

  return startValue;
};

var minStartValue = function (nums) {
  let minCumulativeSum = 0;
  let cumulativeSum = 0;

  for (let i = 0; i < nums.length; i++) {
    cumulativeSum += nums[i];
    minCumulativeSum = Math.min(minCumulativeSum, cumulativeSum);
  }

  return 1 - minCumulativeSum; // this is the confusion point, need to analyze more about the logic behind this formula
};

console.log("ans ", minStartValue([-3, 2, -3, 4, 2]));
