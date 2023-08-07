/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  strs.sort((a, b) => a.length - b.length);
  let shortestStr = strs[0];

  for (let i = 0; i < shortestStr.length; i++) {
    if (shortestStr[i] !== strs[strs.length - 1][i])
      return shortestStr.substr(0, i);
  }
  return shortestStr;
};

console.log(longestCommonPrefix(["heightened", "height", "heighten"]));
