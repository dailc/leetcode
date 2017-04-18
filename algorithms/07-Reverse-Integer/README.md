## Reverse-Integer

需要注意的问题是 **模拟数值溢出**，数值溢出时返回0

加上输入的整数位 `32位`整数，那么需要设置一个最大值`Math.pow(2,32)-1`

结果大于它或小于它都会返回0，另外

* 方法一:JS中实现起来最简单的就是通过字符串，然后反转
* 方法二:采用最原始的纯数字的整除和取余运算进行
* 方法三:数字远算，简化过后的
* 其它方法不再介绍
