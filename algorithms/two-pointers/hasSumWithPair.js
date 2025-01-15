function hasSumWithPair(arr, sum) {
  let left = 0,
    right = arr.length - 1;
  let curr = 0;
  for (let i = 0; i < arr.length; i++) {
    curr = arr[left] + arr[right];
    if (curr === sum) return [left, right];
    else if (curr > sum) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}

function hasSumWithPairUnsorted(arr, sum) {
  let record = new Map();
  for (let i of arr) {
    if (record.has(i)) return true;
    record.set(sum - i);
  }
  return false;
}

console.log({ ans: hasSumWithPairUnsorted([1, 3, 4, 5, 7, 8], 20) });
