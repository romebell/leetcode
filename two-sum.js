// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Approach 1; Brute Force

// Complexity Analysis
// - time complexity: O(n^2). For each element we to use that to create to a second loop
// that will check the rest of the array. From there we will be adding the two and checking to
// to see if the result is equal to the target.
// - space complexity is O(1)

let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i - 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return undefined;
}

// Approach 2: Two-pass Hash Table

// By using a hash table, we are able to go from O(n) to O(1) lookup time
// The lookup time of a hash table is O(1) as long as the hash function is chosen carefully.
// We first iterate through the array and put all of the number and index in a hash
// Then we iterate throught the array again and check the complement (target - number) and return
// the index if we have a match. Also, the complement must not be equal to nums[i] itself.

// Complexity Analysis:

// Time complexity : O(n)O(n). We traverse the list containing nn elements exactly twice. 
// Since the hash table reduces the look up time to O(1)O(1), the time complexity is O(n)O(n).

// Space complexity : O(n)O(n). The extra space required depends on the number of items 
// stored in the hash table, which stores exactly nn elements. 

let twoSum = function(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    hash[number] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    let complement = target - number;
    if (hash[complement] !== undefined && hash[complement] !== i) {
      return [i, hash[complement]];
    }
  }
  return undefined;
}

// Approach 3: One-pass Hash Table
// We iterate and insert elements as well as check back to see if the 
// complement exist in the table, then we return that solution

// Complexity Analysis
// Time complexity: O(n). We traverse the list containing n elements only once. Each look up
// in the table costs only O(1) time.

// Space Complexity: O(n) the extra space depends on the number of items stored in the hash table.


let twoSum = function(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    let complement = target - number;

    if (hash[complement] !== undefined && hash[complement] !== i) {
      return [hash[complement], i];
    }

    hash[number] = i;
  }
  return undefined;
}