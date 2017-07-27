## Find-the-Duplicate-Number

## 说明

给一个数组`nums`，有`n + 1`个整数，每一个数字的范围是`[1-n]`，假设只有一个值出现重复

找出那个重复的值

- 不允许重定义数组（只读）

- `O(1)`的空间复杂度

- 时间复杂度小于`O(N)`

- 只有一个值出现重复，但是可以重复多次

### 思路

- 二分查找或环映射法(因为固定为`[1-n]`才能用)

    - 抽屉原理，整个数组中如果小于等于n/2的数的数量大于n/2，说明1到n/2这个区间是肯定有重复数字的

    - https://segmentfault.com/a/1190000003817671
    
    - http://www.cnblogs.com/grandyang/p/4843654.html
