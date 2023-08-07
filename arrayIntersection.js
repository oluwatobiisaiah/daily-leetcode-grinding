/**
 * @param {number[][]} nums
 * @return {number[]}
 */

// Runtime: ** ms, faster than 92.55% of JavaScript online submissions for Intersection of Two Arrays II.
const intersection = function (nums) {
    let result = nums[0]
 
    for(let arr of nums){
     result = arr.filter((num)=>result.includes(num))
    }
 
     return result.sort((a,b)=> a-b)
   
 }
 
 export default intersection
 