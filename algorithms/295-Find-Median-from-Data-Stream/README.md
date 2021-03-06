## Find-Median-from-Data-Stream

## 说明

`中值`是指一个排序整型数组的中间值

如果数组的大小是偶数，没有中间值，这时候`中值`就是旁边的两个中间值得平均值

例如

- `[2, 3, 4]`，`中值`是`3`

- `[2, 3]`，`中值`是`(2 + 3) / 2 = 2.5`

设计一个数据结构，支持以下两种操作

- `void addNum(int num)` - 从数据流中加一个整数到数据结构中

- `double findMedian()` - 返回所有元素中的中位数

示例

```js
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
```

### 思路

- 维护一个最大堆和最小堆

    - 最大堆存的是到目前为止较小的那一半数
    
    - 最小堆存的是到目前为止较大的那一半数
    
    - 这样中位数只有可能是堆顶或者堆顶两个数的均值
    
    - 需要保证两个堆大小之差不超过1
    
    - 通过优先数组实现
    
    - https://segmentfault.com/a/1190000003709954