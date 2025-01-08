const ContiguousArray = (nums) => {
  let prefixSum = 0;
  let prefixMap = { 0: -1 }; // Initialize with prefix sum 0 at index -1
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    // Treat 0 as -1 for prefix sum calculation
    prefixSum += nums[i] === 0 ? -1 : 1;

    if (prefixSum in prefixMap) {
      // If prefixSum was seen before, calculate subarray length
      let length = i - prefixMap[prefixSum];
      maxLength = Math.max(maxLength, length);
    } else {
      // Store the first occurrence of this prefixSum
      prefixMap[prefixSum] = i;
    }
  }

  return maxLength;
};

console.log({ ans: ContiguousArray([0, 1, 0, 1]) });
