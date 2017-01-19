## 求字符串的最大长度的回文子串

常用方法有以下几种:

* 经典的manacher算法(参考：[HDU 3068 九度 1528](http://www.acmerblog.com/hdu-3068-4847.html))，复杂度O(n)
* 动态规划 O(n2)
* 中心扩展法O(n2)
* 暴力穷举O(n3)

本示例里面使用的是理解起来较为简单的 `中心扩展法`

http://www.cnblogs.com/egust/p/4580299.html
