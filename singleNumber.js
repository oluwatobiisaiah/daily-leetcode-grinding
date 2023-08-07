 function  singleNumber(nums) {
    let result 
    for (let num of nums) {
        result ^= num;
      }
      
      return result;
    // return res
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))