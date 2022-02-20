while 循环有两种思考模式和两个注意点。

第一个注意点，先把边界值判断写出来，这是最重要的，也是必须的，先把边界值判断写出来总是对的。 常用的边界判断是： j < nums.length 、（双指针）left < right

第二个注意点，边界值判断所依赖的变量，必须在 while 代码块中更新修改，通常是 left++、 right--、 i++、 j--。

思考模式1 (when)：（温和派）只要符合条件你就去执行。 

思考模式2（until）：（强硬派）不达目的不罢休，直到满足条件为止，但需要对这个条件取反。

---

```javascript
// 不溢出数组的判断，其实就和平时我们的 for 判断一样。
while(j < nums.length) {
	if (nums[j] != 0) {
		[nums[i], nums[j]] = [nums[j], nums[i]]
		// while 也可以用 break 中断
		break
	}
	j++
}
```