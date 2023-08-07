/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let sortedNums1 = nums1.filter((val,index)=> index < m);
    let sortedNums2 = nums2.filter((val,index)=> index <n);
    nums1 = [...sortedNums1,...sortedNums2].sort((a,b)=> a-b)
    console.log(nums1)
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))