## Best-Time-to-Buy-and-Sell-Stock-with-Cooldown

## 说明

给出一个数组，数组中是每天股票的价格

设计一个算法，可以得到最大的利益，遵循如下规则

- 购买和卖出不能在同一天进行

- 必须在购买后才能卖出

- 卖出后，下一天不能买进（有一天冷却时间）

例如

```js
prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
```

### 思路

- 维护三个一维数组

    - `buy[i]`表示在第`i`天之前的最后一个操作是买，此时的最大收益
    
    - `sell[i]`表示在第`i`天之前的最后一个操作是卖，此时的最大收益
    
    - `rest[i]`表示在第`i`天之前的最后一个操作是冷却，此时的最大收益
    
    - 递推式
    
    ```js
buy[i]  = max(rest[i-1] - price, buy[i-1]) 
sell[i] = max(buy[i-1] + price, sell[i-1])
rest[i] = max(sell[i-1], buy[i-1], rest[i-1])    
    ```
    
    - 精简成
    
    ```js
buy[i]  = max(sell[i-2] - price, buy[i-1]) 
sell[i] = max(buy[i-1] + price, sell[i-1])    
    ```
    
    - 进一步优化，由于`i`只依赖于`i - 1`和`i - 2`,，所以可以在`O(1)`空间复杂度完成
    
    - http://www.cnblogs.com/grandyang/p/4997417.html