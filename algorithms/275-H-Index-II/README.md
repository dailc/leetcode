## H-Index-II

## 说明

基于上一题目，如果`引用`值是已经升序排序的，如何优化算法？


### 思路

- 遍历

    - 对于引用数`citations[i]`，大于等于该引用数文献的数量是`citations.length - i`
    
    - 而当前的`H-Index`则是`Math.min(citations[i], citations.length - i)`