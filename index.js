function hasTargetSum(array, target) {
  for (let i = 0; i<array.length; i++){
    for (let y = i + 1; y<array.length; y++){
      if (array[i] + array[y] === target){
        return true;
      }
      else {
        return false;
      }
    }
  }


}

/*
  O(n*n)
*/

/*
check the first and second number if they sum to target
if not check next number in element if they sum up to target
check if every number in the element does the same thing
*/

/*
  for every number in array we need to check it agains the other numbers in the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log(hasTargetSum([3,5,9,7,8,10], 8))
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
