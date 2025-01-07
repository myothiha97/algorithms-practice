var getAverages = function (nums, k) {
  const n = nums.length;
  let avgs = new Array(n).fill(-1); // Initialize result array
  const subArrLength = 2 * k + 1; // Length of the window

  // Edge case: If the subarray length is greater than nums, all are -1
  if (n < subArrLength) {
    return avgs;
  }

  // Compute the sum of the first window
  let currSum = 0;
  for (let i = 0; i < subArrLength; i++) {
    currSum += nums[i];
  }

  // Process the array with sliding window
  for (let i = k; i < n - k; i++) {
    // Compute the average for the current window
    avgs[i] = Math.floor(currSum / subArrLength);

    // Slide the window to the right
    if (i + k + 1 < n) {
      currSum += nums[i + k + 1]; // Add the new element to the window
      currSum -= nums[i - k]; // Remove the old element from the window
    }
  }

  return avgs;
};
