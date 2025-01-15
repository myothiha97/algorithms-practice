var groupAnagrams = function (strs) {
  let ans = [];
  let sortedStrs = strs.map((str) => str.split("").sort().join("")); // sort the strs with alphabetically
  let history = []; // to keep track if the string is already searched,
  /** For every iteration, we gonna compare sortedStrs[i] to the rest of strs  */
  for (let i = 0; i < sortedStrs.length; i++) {
    let curr = [strs[i]];
    for (let l = i + 1; l < sortedStrs.length; l++) {
      if (sortedStrs[i] === sortedStrs[l]) {
        curr.push(strs[l]);
      }
    }
    // we will only add the curr to ans only if the current sortedStrs[i] doesn't exist in history
    if (!history.includes(sortedStrs[i])) {
      ans.push(curr);
      history.push(sortedStrs[i]);
    }
  }
  return ans;
};

/** The time complexity of the first approach,
 * since we use nested loop, the time complexity will be O(n^2)
 * this is the brute force solution
 */

var groupAnagramsOptimized = function (strs) {
  let sortedStr = strs.map((str) => str.split("").sort().join("")); // inorder to check Anagram, first we need to sort each str in strs by alphabetically
  let records = new Map(); /** when looping through the array of strs,
   we store the sortedStr[i] as key, and whenever we found sorted[i],
    we re-map that index to original strs and add strs[i] to array with with its key (sorted[i]) 
    */
  for (const index in strs) {
    let i = Number(index);
    if (records.has(sortedStr[i])) {
      const curr = records.get(sortedStr[i]);
      curr.push(strs[i]);
      records.set(sortedStr[i], curr);
    } else {
      records.set(sortedStr[i], [strs[i]]); // for the first time, we store strs[i] as first item to array,
    }
  }
  console.log({ records });
  return Array.from(records.values());
};

/** With the second approach, we only use one loop,
 * so the time complexity => O(n)  */

console.log({
  ans: groupAnagramsOptimized(["eat", "tea", "tan", "ate", "nat", "bat"]),
});
