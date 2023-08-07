/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const exNums = nums.filter((num,index)=> num !== val );
    nums = [...exNums,...nums.filter((num,index)=> num === val )];
    console.log(exNums)
    return exNums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))