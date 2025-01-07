var sortedSquares = function (nums) {
  let toSortedArr = nums.map((num) => num ** 2); // we got 0(N) space , since we store arr
  let result = [];
  let leftPointer = 0;
  let rightPointer = toSortedArr.length - 1;

  for (let i = toSortedArr.length - 1; i >= 0; i--) {
    let val;
    if (toSortedArr[leftPointer] < toSortedArr[rightPointer]) {
      val = toSortedArr[rightPointer];
      rightPointer--;
    } else {
      val = toSortedArr[leftPointer];
      leftPointer++;
    }
    result[i] = val;
  }
  return result;
};

console.log(sortedSquares([-4, -3, 2, 1, 5]));
