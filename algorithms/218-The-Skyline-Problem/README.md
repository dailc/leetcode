## The-Skyline-Problem

## 说明
一个城市的轮廓线是指，在远处看城市中的建筑物时，对外的轮廓形状。

现在假设你再城市中的至高点，可以看到城市的景观，请写一个算法，将这些景观转换为轮廓线，例如:`A`->`B`

![](https://leetcode.com/static/images/problemset/skyline1.jpg)

![](https://leetcode.com/static/images/problemset/skyline1.jpg)

- 每一个建筑物的几何信息保存在一个三个元素的数组中，例如`[Li, Ri, Hi]`
    - `Li`和`Ri`分别是左侧边缘和右侧边缘处的`x`坐标
    - `Hi`是高
    - 假设`0 ≤ Li < Ri ≤ INT_MAX`，`0 < Hi ≤ INT_MAX`
    - 假设所有建筑都是矩形，而且表面绝对光滑

- 对应的输出结果是一系列轮廓边角的坐标集合，格式为: `[ [x1,y1], [x2, y2], [x3, y3], ... ]`
    - 可以唯一描述一个轮廓
    - 左后一个节点代表左右侧轮廓的边缘，高度永远是`0`
    - 除了最后一个节点，其它节点都可以看出是`一个轮廓上的水平线段的左端点`
    - 任何相邻建筑物之间的空隙都应该被视为轮廓线的一部分

- 例如上图`A`中图片的所有尺寸是: `[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]`

- 例如图`B`中轮廓的数据是: `[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]`

注意:

- 每一个建筑物数据的范围`[0, 10000]`
- 输入的数组已经通过了`x`坐标的`升序排列`
- 输入的数组也需要以`x`坐标排序
- 同一个高度不允许出现连续的线段。
    - `[...[2 3], [4 5], [7 5], [11 5], [12 7]...]`是不允许的
    - 它应该是`[...[2 3], [4 5], [12 7], ...]`
    
### 思路

- 1.分别将每一个线段的左边节点和右边节点存入到新的高度数组中，然后遍历求拐点
    - 求拐点时，利用一个最大化heap来保存当前的楼顶高度，遇到左边节点，则在heap中插入高度信息，遇到右边节点则从heap中删除
    - 分别用pre和cur来表示之前的高度与当前的高度，当cur!=pre时说明出现了拐点
    - 如果两个节点的x坐标相同，我们就要考虑节点的其它属性来排序以避免出现冗余的答案
    - 如果都是左节点，就按y坐标从大到小排，如果都是右节点，按y坐标从小到大排，一个左节点一个右节点，就让左节点在前
    - 需要实现一个优先级数组
    
__暂时还未完成__