// function containsDuplicate(nums) {
//   const set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return true;
//     }
//     set.add(nums[i]);
//   }

//   return false;
// }

function removeDuplicates(nums) {
  let x = new Set();

  for (let i = 0; i < nums.length; i++) {
    x.add(nums[i]);
  }

  return [...x];
}

console.log(removeDuplicates([1,1,2,3,3]));

//console.log(containsDuplicate([1,2,3,1]));