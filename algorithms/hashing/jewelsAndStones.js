const jewelsAndStone = (jewels, stones) => {
  const stonesCounts = new Map();

  for (const stone of stones) {
    stonesCounts.set(stone, (stonesCounts.get(stone) || 0) + 1);
  }

  let ans = 0;

  for (const jewel of jewels) {
    if (stonesCounts.has(jewel)) {
      ans += stonesCounts.get(jewel);
    }
  }
  return ans;
};

console.log({ ans: jewelsAndStone("aA", "aAAbbbb") });
