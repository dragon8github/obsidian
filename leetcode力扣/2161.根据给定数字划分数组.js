/*
 * @lc app=leetcode.cn id=2161 lang=javascript
 *
 * [2161] 根据给定数字划分数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const left = []
    const mid = []
    const right = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) left.push(nums[i])
        if (nums[i] == pivot) mid.push(nums[i])
        if (nums[i] > pivot) right.push(nums[i])
    }

    return [...left, ...mid, ...right]
};
// @lc code=end

