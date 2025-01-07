function findSubarrayWithSumEqualToK(s, k) {
  const counts = new Map();
  let curr = 0,
    ans = 0;
  for (let num of s) {
    curr += num;
    if (counts.get(curr - k)) {
      ans += counts.get(curr - k);
    }
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }
  return ans;
}

console.log({ answer: findSubarrayWithSumEqualToK([1, 2, 1, 2, 1], 3) });
