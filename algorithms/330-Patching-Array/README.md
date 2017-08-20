## Patching-Array

## 说明

给一个数组，给一个范围n，最少放进去多少个数字，可以让数组中的数字的子集的和覆盖满整个范围
例如

```js
nums = [1, 3], n = 6
Return 1.

组合是`[1], [3], [1, 3]`，可能的和是`1, 3, 4`

现在，先打一个补丁`2`，这时组合是`[1], [2], [3], [1,3], [2,3], [1,2,3]`
和是`1, 2, 3, 4, 5, 6`,仍然符合在`[1, 6]`内


所以结果是`1`
```

```js
nums = [1, 5, 10], n = 20
Return 2.
The two patches can be [2, 4].
```

```js
nums = [1, 2, 2], n = 5
Return 0.
```


### 思路

- 贪心算法

http://blog.csdn.net/murmured/article/details/50596403
http://blog.csdn.net/happyaaaaaaaaaaa/article/details/50899547