/**
 * @param {number[]} nums
 * @return {number}
 */

function getIntegersInRange(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = max - min + 1;
    
    return Array.from({ length }, (_, index) => min + index);
  }
  
  function findMissingValues(array1, array2) {
    const missingValues = [];
  
    for (let value of array1) {
      if (!array2.includes(value)) {
        missingValues.push(value);
      }
    }
  
    return missingValues;
  }
  
   const missingNumber = function (nums) {
    const orderedNums = nums.sort((a,b)=> a - b)
    const range = getIntegersInRange(nums)
   return  {orderedNums,range,missing:findMissingValues(range,orderedNums)}
  
  }
  
    console.log(missingNumber([9,6,4,2,3,5,7,0,1]))