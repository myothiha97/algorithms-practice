/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let range = nums.length + 1;
  let toSearch = new Set(nums);

  for (let i = 0; i < range; i++) {
    if (!toSearch.has(i)) {
      return i;
    }
  }
  return -1;
};

console.log("answer ", missingNumber([0, 1]));
