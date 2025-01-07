const CountNumberOfNiceSubArray = (arr, k) => {
  const counts = new Map();
  counts.set(0, 1);
  let curr = 0,
    ans = 0;
  for (let num of arr) {
    // we got one for loop, so 0(N)
    curr += num % 2;
    ans += counts.get(curr - k) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }
  return ans;
};
console.log({ ans: CountNumberOfNiceSubArray([1, 1, 2, 1, 1], 3) });
