Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Example 1
```
Input: s = "the sky is blue"
Output: "blue is sky the"
```
## Example 2
```
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```
## Example 3
```
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

# Intuition
The intuition behind this problem is to first split the string into an array of words by separating the spaces,then map through the splitted words and trim the words from whitespaces, then filter the array to check for valid word then reverse the array of words, then join the array of words into a string.