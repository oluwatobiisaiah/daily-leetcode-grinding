For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

## Example 1
```
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
```
## Example 2
```
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
```
## Example 3
```
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

# Intuition
The first condition that makes str1 and str2 have greatest common divisor/highest common factor is when str1 + str2 == str2+ str1 (concatenation of str1 and str2 is equal to concatenation of str2 and str1). This is because the concatenation of str1 and str2 is the same as the concatenation of str2 and str1. For example, str1 = "ABC" and str2 = "AB", str1 + str2 = "ABCAB" and str2 + str1 = "ABABC". The concatenation of str1 and str2 is equal to the concatenation of str2 and str1. Therefore, the greatest common divisor of str1 and str2 is "AB".

Greatest Common Divisor/Highest Common factor is highest factor of two or more numbers e.g 12 and 18
12 = 1, 2, 3, 4, 6, 12,
18 = 1, 2, 3, 6, 9, 18
Their highest common factor or greateest common divisor is 6

# My Approach
I started out by creating a function that can find the GCD of two numbers, which has a time complexity of O(log n), it's a recursive function and the base case is when **the second number is 0, then the first number is the GCD**. If the second number is not 0, then the function is called again with the second number as the first number and the remainder of the first number divided by the second number as the second number.
The reason for creating this function is because I will need it to find the GCD of the lengths of the two strings, which will be used to slice the strings to get the GCD of the strings, I will be taking the substring of the first string or second string from 0 to the GCD of the lengths of the two strings.
<br>
In the main function I am first checking if the concatenation of the two strings is equal to the concatenation of the second string and the first string, if it is, then I am returning the first string. If it is not, then I am finding the GCD of the lengths of the two strings, then I am returning the substring of the first string from 0 to the GCD of the lengths of the two strings.
