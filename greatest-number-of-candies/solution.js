/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// first solution
var kidsWithCandies = function(candies, extraCandies) {
    let greatestCandy = 0
    let output = []
    for (const val of candies) {
        val > greatestCandy && (greatestCandy = val);
      }
    

    for(let i = 0;i<candies.length;i++){
        output.push(candies[i]+extraCandies >= greatestCandy);
        
    }

    return output;
};


// second solution
var kidsWithCandies = function(candies, extraCandies) {
    let greatestCandy = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= greatestCandy);
}