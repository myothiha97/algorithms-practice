var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    curr = "";
  const dict = new Map();
  while (right < s.length) {
    if (!curr.includes(s[right])) {
      curr += s[right];
      dict.set(curr, curr.length);
      right++;
    } else {
      curr = curr.replace(s[left], "");
      left++;
    }
  }
  let ans = 0;
  for (const value of dict.values()) {
    ans = Math.max(ans, value);
  }
  return ans;
};

console.log({ ans: lengthOfLongestSubstring("abcaa") });

const lengthOfLongestSubstringOptimized = (s) => {
  let left = 0,
    maxLength = 0,
    charSet = new Set();
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log({ ans: lengthOfLongestSubstringOptimized("abcaa") });
