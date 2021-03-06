## Dungeon-Game

## 说明
地下城游戏，恶魔抓住了公主`P`，并把她关在了地下城的右下角。地下城有`M*N`个房间，分布在一个2D网格上。

英勇的骑士从左上角出发，需要找到一条通路去救公主。

骑士有一个初始化生命值(一个正整数)，如果生命值小于等于0，那么就死了。

房间有三种情况:

	* 有恶魔(负数)，骑士会失去一定的生命值
	* 空房间(0)
	* 有魔法球(正数)，骑士会恢复一定生命值

而且骑士每次只能`向右`或者`向下`走。

写出一个方法，判断骑士成功解决公主需要的最小生命值。

例如，以下的房间中，需要至少`7`点生命值，最优路径是`RIGHT-> RIGHT -> DOWN -> DOWN`

| -2 (K) | -3 | 3 |
| -5 | -10 | 1 |
| 10 | 30 | -5 (P) |

注意:

* 骑士的血量没有上限
* 每一个房间都符合上述三种情况(哪怕是起始房间和结束房间)

### 思路

* 1.动态规划
	* 从[m, n]往回遍历到[1, 1]
	* 如果当前位置魔力正且大于等于右边/下边需要的魔力，则该处不需要额外的魔力，
	* 否则，勇士到达该处时需有一定的魔力来满足该处和右边/下边需要的魔力。
	
	http://blog.csdn.net/ljiabin/article/details/42616291
