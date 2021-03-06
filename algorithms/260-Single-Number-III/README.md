## Single-Number-III

## 说明

给出一个数字数组`nums`，有两个元素出现一次，其它元素都出现两次，找到这两个出现一次的元素

例如

```js
nums = [1, 2, 1, 3, 2, 5]
```

返回`[3, 5]`

注意

- 数组的排序并不重要，比如返回`[5, 3]`也是对的

- `O(N)`的时间复杂度，`O(1)`的空间复杂度

### 思路

- 先异或，得到一个数(`a`与`b`的异或)

- 去这个数任意一个为`1`的位(`diff &= -diff`可以取到)，与数组的元素`&`，可以得到两个数组

- 然后两个数组分别求值

- 实际上没有必要用额外数组，直接在本数组中通过`if`判断即可
