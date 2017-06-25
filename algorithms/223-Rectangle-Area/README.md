## Rectangle-Area

## 说明
给出如下组合: 

```
(A,B)
(C,D)
(E,F)
(G,H)
```
分别代表2D平面上的坐标

找到平面上的最大面积(被线段包围的面积)，例如:

![](https://leetcode.com/static/images/problemset/rectangle_area.png)


### 思路

- 根据题意，那几个点的分别都是类似的，因此
    - `总面积 = 两个矩形的面积 - 相交面积`