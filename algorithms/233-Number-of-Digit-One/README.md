## Number-of-Digit-One

## 说明
给出一个整形`n`，统计所有`<= n`的数中,数字`1`出现的总数，例如

`n = 13`，返回`6`，因为

```
1, 10, 11, 12, 13
```

### 思路

- 每10个数，有一个个位是1，每100个数，有十个十位是1，每1000个数，有100个百位是1
    
    - 所以依次计算个位，10位，百位，...，等位数上的`1`的个数
    
    - 公式为`(a + 8) / 10 * m + (a % 10 == 1) * (b + 1);`
    
    - http://blog.csdn.net/xudli/article/details/46798619