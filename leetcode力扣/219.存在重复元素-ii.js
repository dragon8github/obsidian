/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    var map = new Map()

    for (let i = 0; i < nums.length; i++) {
        // 缓存存在重复的数据，并且索引差距小于k（符合重复的条件）
        if (map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k) {
            return true
        } else {
            map.set(nums[i], i)
        }
    }

    return false
};
// @lc code=end

