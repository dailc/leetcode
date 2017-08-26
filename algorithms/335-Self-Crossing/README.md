## Self-Crossing

## 说明

给你一个`n`个正数的数组`x`

从`(0, 0)`点出发，往北方移动`x[0]`米，然后向西方移动`x[1]`米，向南方移动`x[2]`米，向东方移动`x[3]`米，
依次类推，也就是说方向是`逆时针`变换的

写一个算法，判断路径是否穿它自己（路径的交叉）

- `O(1)`的算法复杂度，`O(N)`的时间复杂度

例如

```js
Given x = 
[2, 1, 1, 2]
,
?????
?   ?
???????>
    ?

Return true (self crossing)
```

```js
Given x = 
[1, 2, 3, 4]
,
????????
?      ?
?
?
?????????????>

Return false (not self crossing)
```

```js
Given x = 
[1, 1, 1, 1]
,
?????
?   ?
?????>

Return true (self crossing)
```

### 思路

- 分析判断相交的情况

- 第一种情况，第四条边和第一条相交

```js
     x(1)
    ┌───┐
x(2)│   │x(0)
    └───┼──>
    x(3)│
        
```

- 第二种情况，第五条边和第一条重合

```js
      x(1)
    ┌──────┐
    │      │x(0)
x(2)│      ^
    │      │x(4)
    └──────│
      x(3)
```

- 第三种情况，第六条边和第一条相交

```js
      x(1)
    ┌──────┐
    │      │x(0)
x(2)│     <│────│
    │       x(5)│x(4)
    └───────────│
        x(3)
```

- 同样适合第七条边和第二条边相交的情况等等依次向后类推

http://www.cnblogs.com/grandyang/p/5216856.html