const MaximumNumberofBalloons = (text) => {
  let toSearch = "balloon";
  let textCounts = new Map();
  let ans = 0;
  for (const char of toSearch) {
    textCounts.set(char, 0);
  }

  for (const char of text) {
    if (toSearch.includes(char))
      textCounts.set(char, (textCounts.get(char) || 0) + 1);
  }
  if (textCounts.get("l")) {
    textCounts.set("l", Math.floor(textCounts.get("l") / 2));
  }
  if (textCounts.get("o")) {
    textCounts.set("o", Math.floor(textCounts.get("o") / 2));
  }

  for (const [key, val] of textCounts) {
    if (key === "b") ans = val;
    ans = Math.min(ans, val);
  }

  return ans;
};

console.log({
  ans: MaximumNumberofBalloons(
    "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
  ),
});
