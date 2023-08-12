There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

## Example 1
```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
```

## Example 2 
```
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
```
 
## Example 3
```
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

# Intuition
What we do to solve this problem is to find the highest number of candies received by a kid, then we check if the number of candies received by each kid plus the extra candies is greater than or equal to the highest number of candies received by a kid, if it is, then we return true, else we return false. I think that's the most intuitive way to solve this problem and its simple enough.

# My Approach
I first find the highest number of candies received by a kid, then I loop through the candies array and check if the number of candies received by each kid plus the extra candies is greater than or equal to the highest number of candies received by a kid, if it is, then I append True to the result array, else I append False to the result array. Then I return the result array.

# Time Complexity
The time complexity of this solution is O(n) because we are looping through the candies array once to find the highest number of candies received by a kid, then we are looping through the candies array again to check if the number of candies received by each kid plus the extra candies is greater than or equal to the highest number of candies received by a kid.

# Space Complexity
The space complexity of this solution is O(1) because without counting the space of input and output, we are not using any space except for some integers like greatestCandy and candy in the loop.

# Some thing I learned
I am using Javascript for this solution and My first approach was to use the sort method on the candies array to find the greatest number of candies received by a kid, but I realized that the sort method sorts the array in a 
place and it mutates the order of the extracandies through the run time of the function and making it not to return an expected output. So I had two different approach to the solutions, a shorther code and a long one too..
