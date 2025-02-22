/**
 * Function to find the maximum subarray sum using Divide and Conquer approach
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return maxSubArrayRecursive(nums, 0, nums.length - 1);
};

// Helper function to find max crossing sum
function maxCrossingSum(arr, left, mid, right) {
    let sum = 0;
    let leftSum = -Infinity;

    // Calculate maximum left subarray sum
    for (let i = mid; i >= left; i--) {
        sum += arr[i];
        leftSum = Math.max(leftSum, sum);
    }

    sum = 0;
    let rightSum = -Infinity;

    // Calculate maximum right subarray sum
    for (let i = mid + 1; i <= right; i++) {
        sum += arr[i];
        rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
}

// Function to apply divide and conquer
function maxSubArrayRecursive(arr, left, right) {
    // Base case: only one element
    if (left === right) {
        return arr[left];
    }

    let mid = Math.floor((left + right) / 2);

    let maxLeft = maxSubArrayRecursive(arr, left, mid);
    let maxRight = maxSubArrayRecursive(arr, mid + 1, right);
    let midMax = maxCrossingSum(arr, left, mid, right);

    return Math.max(maxLeft, maxRight, midMax);
}
