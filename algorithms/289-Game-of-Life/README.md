## Game-of-Life

## 说明

给出`m*n`的网格，初始化值`0(dead)`，`1(live)`

每一个元素有`8`个邻居（横，竖，以及对角线）

下一代的网格元素按以下规则生成

- 任意`live`元素，如果它的邻居`live`状态的小于`2`，那么它也会`dead`

- 任意`live`元素，如果它的邻居`live`状态为`2`或者`3`，那么它也`live`

- 任意`live`元素，如果它的邻居`live`状态的大于`3`，那么它也会`dead`

- 任意死亡的元素，如果它的邻居`live`状态的等于`3`，那么它会`live`

写一个函数计算下一代

注意

- 直接在网格上替换更新

    - 所有的网格，需要在同一时间更新
    
    - 不能先更新一些元素然后再更新另一些元素
    
- 网格以`2D`数组表示，但是网格的宽和高理论上可以是无限大的，这样可能会造成边界问题，如何解决这些问题？

### 思路

- `O(MN)`的复杂度，编码转换为`4`个（`0`，`1`，`2`，`3`）

    - 0 : 上一轮是0，这一轮过后还是0
    
    - 1 : 上一轮是1，这一轮过后还是1
    
    - 2 : 上一轮是1，这一轮过后变为0
    
    - 3 : 上一轮是0，这一轮过后变为1
    
    - https://segmentfault.com/a/1190000003819277