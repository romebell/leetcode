var threeSum = function(nums) {
  if (nums.length < 3) return [];
  nums = nums.sort();
  
  let uniqueTriplets = [];
  let len = nums.length;
  let i,j,k;
  
  
  for(i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      
      for (j = i + 1; j < len; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue;
          
          for (k = j + 1; k < len; k++) {
            let sum = nums[i] + nums[j] + nums[k];
              if (k > j + 1 && nums[k] === nums[k - 1]) continue;
              
              if (sum === 0) {
                  uniqueTriplets.push([nums[i], nums[j], nums[k]]);
              }
          }
      }
  }
  
  return uniqueTriplets;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
// The solution above is a brute force solution with an underperforming runtime.

// Time complexity O(n^3) because we are having to iterate over the same array with n size 3 
// three nested within each other to look and the space complexity is O(n^2) because we don't
// know how many will be in the uniqueTriplet array. We need O(n^2) to store triplets in a set.

function threeSum(nums) {
  nums = nums.sort();
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while(nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      }
    }
  }
  return result;
}

function threeSum(nums) {

  nums.sort((a, b) => {
    return a - b;
  });

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {

    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k ) {

      let sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--
        j++;
        k--;
      }
    }
  }
  return result;
}
// Time complexity for this solution is O(n^2)
// Space complexity is O(n^2) for storing triplets in a set.

// Resources to look at for assistance: https://rohan-paul.github.io/javascript/2018/04/29/3-sum-with-JavaScript/