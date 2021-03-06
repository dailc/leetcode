## Clone-Graph

## 说明
给出一个无向图，图中的每一个节点都包含`label`和相邻的节点列表`neighbors`。
所有的`label`都是唯一的。

无向图的序列化:

* 用`#`作为每一个节点的分隔符，`,`作为节点的label和相邻节点的分隔符。
* 例如一个序列化的图:`{0,1,2#1,2#2,2}`
* 这个图有三个节点，所以有被`#`分割的三个部分
	* 第一个节点的label是`0`，这个节点连接label为`1`和label为`2`的节点
	* 第二个节点的label是`1`，将`1`节点连接label为`2`的节点
	* 第三个节点的label为`2`，`2`节点连接它的自身(自循环)

这个图的可视化如下:

```
       1
      / \
     /   \
    0 --- 2
         / \
         \_/
```

需求为: 克隆一个无向图

### 思路

* 1.DFS
	* 先序列化，然后再反序列化
	* 加上label只有数字
	* 其实如果仅仅是克隆的话，简单的dfs即可实现
* 2.简单的DFS实现，直奔主题，不再序列化