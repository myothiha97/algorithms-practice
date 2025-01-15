var canConstruct = function (ransomNote, magazine) {
  const dict = new Map();
  for (let char of magazine) {
    dict.set(char, (dict.get(char) || 0) + 1);
  }
  for (const char of ransomNote) {
    if (!dict.has(char) || dict.get(char) === 0) {
      return false;
    }
    dict.set(char, Math.max((dict.get(char) || 0) - 1, 0));
  }
  return true;
};

console.log({ ans: canConstruct("aa", "abb") });
