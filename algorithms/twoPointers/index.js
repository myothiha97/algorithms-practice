// after solving the problem, we need to analysis for space and time complexity

const findSubArrWithBiggestSum = (arr, size) => {
  if (size < 1) {
    throw new Error("The size cannot be less than 1");
  }
  let currentSum = Number.MIN_VALUE;
  let left = 0;
  let right = size - 1;
  let result = [];

  let p = right;

  // 0(N)
  while (right < arr.length && p < arr.length) {
    let sum = 0;

    //0(M), the loop doesnt grow relative to input or its parent while loop

    for (let k = left; k <= right; k++) {
      sum += arr[k];
    }
    if (sum > currentSum) {
      currentSum = sum;
    }
    if (right + 1 === arr.length) {
      p++;
    } else {
      left++;
      right++;
      p++;
    }
  }

  let index = 0;

  // 0(M)

  for (let i = left; i <= right; i++) {
    if (index < size) {
      result[index] = arr[i];
      index++;
    }
  }

  return result;
};

// thus the big 0 of this function is 0(N.M)
// const subArr = findSubArrWithBiggestSum([1, 3, 4, 5, 6, 9], 1);

// console.log({ subArr });

const findSubArrWithBiggestSumSlidingWindow = (arr, size) => {
  if (size < 1) {
    throw new Error("The size cannot be less than 1");
  }
  let maxSum = Number.MIN_VALUE;
  let currentSum = 0;
  let leftPointer = 0;

  for (let i = 0; i < size; i++) {
    currentSum += arr[i];
  }

  for (let i = size; i < arr.length; i++) {
    currentSum = currentSum - arr[i - size] + arr[i]; // formula to calculate sum

    if (currentSum > maxSum) {
      maxSum = currentSum;
      leftPointer = i - size + 1; // formula to increment start index
    }
  }
  return arr.slice(leftPointer, leftPointer + size);
};

console.log({
  subArr: findSubArrWithBiggestSumSlidingWindow([1, 3, 4, 56, 7, 9, 10], 1),
});
