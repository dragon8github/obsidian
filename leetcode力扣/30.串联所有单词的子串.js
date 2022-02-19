/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = []

    // 根据题目的说法，words 中的单词长度相同，所以取第一个即可
    const word_len = words[0].length 

    // 思路1：获取 words 所有单词的字符串总长度，在 s 中进行该长度的滑窗。
    const len = words.length * word_len

    // words 中的单词可能会出现重复，所以我们需要用 hashTable 来记录。
    const getMap = () => {
        const map = new Map()
        words.forEach((word, key) => map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1))
        return map
    }

    // 滑窗
    for (let i = 0; i < s.length - len + 1; i++) {
        // 第一次滑窗找到 barfoo，第二次滑窗找到 arfoot，第三次滑窗找到 rfooth……
        const str = s.substring(i, i + len)

        // 创建一个 hashTable 来操作
        const map = getMap()

        // 遍历当前滑窗字符串，如：barfoo、arfoot、rfooth……
        // 思路2：滑窗内的字符串再一次进行遍历判断
        for(j = 0; j < str.length; j += word_len) {
            // 第一次获取 bar、第二次获取 foo
            const word = str.substring(j, j + word_len)

            // 判断 map 是否存在，如果存在则 -1
            if (map.has(word)) {
                map.set(word, +map.get(word) - 1)
            } else {
                // 如果不存在，直接中断内层循环
                break
            }
        }

        // 是否都为 0，如果是的话，说明都匹配了。
        const isFind = [...map.values()].every(_ => _ === 0)

        // 如果找到的话，那么保存结果
        if (isFind) {
            result.push(i)
        }
    }

    return result
};
// @lc code=end

