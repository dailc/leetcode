## Valid-Palindrome

## 说明
给出一个字符串，判断它是否是回文数(只考虑字母与数字，其它字符都忽略)，例如:

```
A man, a plan, a canal: Panama
```
是回文字符串

```
race a car
```
不是

注意，空字符串是有效的回文数(可以统一转为小写判断)

### 思路

* 1.双指针遍历，分别从头和尾向中间遍历(遇到特殊字符则跳过)

拓展: Manacher算法(线性时间寻找最大子回文数)

http://blog.csdn.net/dyx404514/article/details/42061017
