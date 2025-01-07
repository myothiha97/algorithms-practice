var removeDuplicates = function (nums) {
  let count = 0;
  let temp = 0;
  let ans = [];
  let duplicateCount = 0;
  while (count < nums.length) {
    if (count === 0) {
      temp = nums[temp];
    } else {
      if (nums[count] === temp) {
        duplicateCount++;
        for (let i = count; i < nums.length - 1; i++) {
          nums[i] = nums[i + 1];
        }
        nums[nums.length - 1] = Number.NEGATIVE_INFINITY;
        temp = nums[count];
      } else {
        temp = nums[count];
      }
    }

    count++;
  }

  ans = nums.filter((num) => num > 0);

  return ans.length;
};

// console.log("arr length ", removeDuplicates([1, 2, 2, 3, 4, 5]));

var removeDuplicatesBetter = function (nums) {
  let ans = [];
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      temp = nums[i];
      ans.push(nums[i]);
    } else {
      if (temp !== nums[i]) {
        ans.push(nums[i]);
      }
      temp = nums[i];
    }
  }

  console.log({ ans });

  return ans.length;
};

console.log(
  "arr length ",
  removeDuplicatesBetter([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
);
