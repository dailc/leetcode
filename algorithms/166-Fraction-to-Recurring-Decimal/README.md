## Fraction-to-Recurring-Decimal

## 说明
给出两个整数，分别代表分子和分母。以字符串的形式返回这个小数，如果小数有循环，请将循环部分放在括号中。

例如:

```
numerator = 1, denominator = 2, return "0.5".
numerator = 2, denominator = 1, return "2".
numerator = 2, denominator = 3, return "0.(6)".
```

### 思路
关键在于，如何识别小数的循环部分。
需要考虑正负数，先判断符号，然后都转化为正数。
考虑溢出，如果输入为Integer.MIN_VALUE，取绝对值后会溢出。

* 1.参考网友csdn博文
	
	http://blog.csdn.net/ljiabin/article/details/42025037