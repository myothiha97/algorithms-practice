const minimumConsecutiveCards = (nums) => {
  const numsIndexes = new Map();
  // O(N)
  for (let index in nums) {
    let i = Number(index);
    if (numsIndexes.has(nums[i])) {
      let curr = numsIndexes.get(nums[i]);
      curr.push(i);
      numsIndexes.set(nums[i], curr);
    } else {
      numsIndexes.set(nums[i], [i]);
    }
  }

  let ans = -1;
  count = 0;

  // we got one for loop -> O(n)
  for (let range of numsIndexes.values()) {
    if (range.length >= 2) {
      // 0(M LogM) for sorting
      let sortedRange = range.sort();

      let diff = sortedRange[sortedRange.length - 1] - sortedRange[0] + 1;
      if (count === 0) {
        ans = diff;
      } else {
        ans = Math.min(ans, diff);
      }
    }
  }
  return ans;
};

// Total time complexity -> O(N . M Log M)

console.log({ ans: minimumConsecutiveCards([1, 2, 6, 2, 1]) });

// Now for the optimize version

const minimumConsecutiveCardsOptimize = (nums) => {
  const lastSeenIndex = new Map();
  let ans = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (lastSeenIndex.has(nums[i])) {
      let diff = i - lastSeenIndex.get(nums[i]) + 1;
      ans = Math.min(ans, diff);
    }
    lastSeenIndex.set(nums[i], i);
  }

  return ans === Infinity ? -1 : ans;
};

// The total time complexity for this approach is O(N)
console.log({ ans: minimumConsecutiveCardsOptimize([1, 2, 6, 2, 1]) });
