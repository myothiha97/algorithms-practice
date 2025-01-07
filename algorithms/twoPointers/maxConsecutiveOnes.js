const longestOnes = (nums, k) => {
  let left = 0; // Left pointer of the window
  let maxLength = 0; // Maximum length of consecutive 1's
  let zeroCount = 0; // Count of 0's in the current window

  for (let right = 0; right < nums.length; right++) {
    // If we encounter a 0, increase the zero count
    if (nums[right] === 0) {
      zeroCount++;
    }

    // If zeroCount exceeds k, shrink the window from the left
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Calculate the maximum length of the current valid window
    maxLength = Math.max(maxLength, right - left + 1); // (right - left + 1 ) is formula for calculating the length of window
  }

  return maxLength;
};
