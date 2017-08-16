## Power-of-Three

## 说明

写一个程序，判断一个数是否是`3`的指数

- 能否不通过循环和递归？

### 思路

- 1.取巧，任何一个3的x次方一定能被int型里最大的3的x次方整除

- 2.取对数，如果n是3的x次方，那么以3为低对数后一定是一个整数，否则不是

- http://blog.csdn.net/ebowtang/article/details/50485622