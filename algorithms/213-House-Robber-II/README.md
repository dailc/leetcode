## House-Robber-II

## 说明
基于`198-House Robber`

在抢劫完毕那个街区后，那个小偷发现有一个新的地方可以抢劫，而且不会引起太大的注意。

这里所有的房子是围成一个圈的-首尾相连，而且安全系统和上一个街区是一样的。

请用一个新的算法，计算最多能抢劫到的金钱。

### 思路

* 1.动态规划
    * 将问题转换为`问题1`，分别去掉第一家和最后一家，然后去最大值