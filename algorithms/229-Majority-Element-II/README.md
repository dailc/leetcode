## Majority-Element-II

## 说明
给一个`n`大小的整形数组，找到所有出现次数超过`n/3`的元素

要求`O(N)`时间复杂度和`O(1)`空间复杂度

### 思路

- 摩尔投票法 Moore Voting

    - 任意一个数组出现次数大于n/3的众数最多有两个
    
    - 第一遍遍历找众数候选人
    
    - 第二遍遍历验证候选人是否是众数
    
    http://www.cnblogs.com/grandyang/p/4606822.html