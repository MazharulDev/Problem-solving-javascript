// ================ problem 16 =======================
// PW2.01.01 Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
};

// const nums1 = [2, 7, 11, 15];
// const target1 = 9;
// console.log(twoSum(nums1, target1));

// const nums2 = [3, 2, 4];
// const target2 = 6;
// console.log(twoSum(nums2, target2));

// const nums3 = [3, 3];
// const target3 = 6;
// console.log(twoSum(nums3, target3));

// ================ problem 17 =======================

// PW2.01.02 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// console.log(threeSum([0, 1, 1]));

// console.log(threeSum([0, 0, 0]));

// ================ problem 18 =======================

// PW2.01.03 Remove Duplicates From Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Constraints:
// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
};

// const k1 = removeDuplicates([1, 1, 2]);
// console.log(k1);

// const k2 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// console.log(k2);

// ================ problem 19 =======================

// PW2.01.04 Next Permutation

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

const nextPermutation = (nums) => {
  const n = nums.length;

  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i < 0) {
    reverse(nums, 0, n - 1);
    return;
  }

  let j = n - 1;
  while (nums[j] <= nums[i]) {
    j--;
  }

  swap(nums, i, j);

  reverse(nums, i + 1, n - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// const nums1 = [1, 2, 3];
// nextPermutation(nums1);
// console.log(nums1);

// const nums2 = [3, 2, 1];
// nextPermutation(nums2);
// console.log(nums2);

// const nums3 = [1, 1, 5];
// nextPermutation(nums3);
// console.log(nums3);

// ================ problem 20 =======================

// PW2.01.05 Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

const searchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

// const nums1 = [1, 3, 5, 6];
// const target1 = 5;
// console.log(searchInsert(nums1, target1));

// const nums2 = [1, 3, 5, 6];
// const target2 = 2;
// console.log(searchInsert(nums2, target2));

// const nums3 = [1, 3, 5, 6];
// const target3 = 7;
// console.log(searchInsert(nums3, target3));
