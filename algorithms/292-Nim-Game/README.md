## Nim-Game

## 说明

有一个游戏（`Nim Game`）：

- 桌上有一堆石头

- 你和你朋友每次可以移除掉`1-3`个石头

- 你先手

- 移除最后那个石头的人获胜

写一个算法判断你是否能赢，例如

`n = 4`时，你永远都不可能赢，因为不管你移除`1, 2, 3`哪一个，最后一个石头总是你对手移除

### 思路

- 分析

    - 当n∈[1,3]时，先手必胜。
    
    - 当n == 4时，无论先手第一轮如何选取，下一轮都会转化为n∈[1,3]的情形，此时先手必负。
    
    - 当n∈[5,7]时，先手必胜，先手分别通过取走[1,3]颗石头，可将状态转化为n == 4时的情形，此时后手必负。
    
    - 当n == 8时，无论先手第一轮如何选取，下一轮都会转化为n∈[5,7]的情形，此时先手必负。
    
    - 类推，当n % 4 != 0时，先手必胜；否则先手必负。

