## Minimum-Height-Trees

## 说明

给出一个具有树特征的无向图，可以选择任何节点作为根节点。

返回所有可能的最小高度树（只需要返回这些树的根节点值即可）。

格式：

- 图有`n`个节点，值得范围时`0 - (n-1)`

- 输入参数有`n`一起无向边（每一个边是一对值）

- 假设没有相同的边，所有的边都是无向的

- 例如`[0, 1]`和`[1, 0]`是一样的

示例：

`n = 4`，边`edges = [[1, 0], [1, 2], [1, 3]]`，返回`[1]`

```js
        0
        |
        1
       / \
      2   3
```

`n = 6`, 边`edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]`, 返回`[3, 4]`

```js
     0  1  2
      \ | /
        3
        |
        4
        |
        5
```

注意：

根据[definition of tree on Wikipedia](https://en.wikipedia.org/wiki/Tree_(graph_theory)), 
其中树的定义是无向图，任意两个顶点都是通过一条路径相连的，也就是说，没有没有循环的图都是树

这棵树的高度是跟和叶子之间的最长的路径的边数和

### 思路

- 建立一个图`g`，是一个二维数组，其中`g[i]`是一个一维数组，保存了i节点可以到达的所有节点

- 我们开始将所有只有一个连接边的节点(叶节点)都存入到一个队列queue中，然后我们遍历每一个叶节点，通过图来找到和其相连的节点

- 并且在其相连节点的集合中将该叶节点删去，如果删完后此节点也也变成一个叶节点了，加入队列中，再下一轮删除

- 当节点数小于等于2时候停止，此时剩下的一个或两个节点就是我们要求的最小高度树的根节点