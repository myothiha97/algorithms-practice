const LargestUniqueNumber = (nums) => {
  let counts = new Map(),
    ans = -1;
  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  for (const num of nums) {
    let prev = ans;
    ans = Math.max(ans, num);
    if (counts.get(ans) > 1) {
      ans = prev;
    }
  }
  return ans;
};
console.log({ ans: LargestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]) });
