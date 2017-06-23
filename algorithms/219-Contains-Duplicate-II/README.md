## Contains-Duplicate-II

## 说明
给一个整形数组和整数`k`，请判断是否存在这样的`i`与`j`

- `i`和`j`的的差值小于等于`k`

- `nums[i] = nums[j]`

### 思路

- 同样用hash，只不过hash多存储了一个`index`下标