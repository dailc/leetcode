## Remove-K-Digits

## 说明

给一个字符串形式的非负整数

移除数字中的`k`位，让这个数字尽量变得最小

注意

- 数字的长度小于`10002`，并且大于`k`

- 输出的字符串的数字不会以`0`开头，譬如`011`这种它会代表`11`

示例

```js
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
```

```js
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
```

```js
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
```

### 思路

- 贪心算法

从首位开始遍历，如果下一位是`0`，删除当前位（至少少两个数量级）

否则，找到下一个下降的数，譬如`143`，`3`比前面的`4`小，因此删除`4`可以得到最小数

http://blog.csdn.net/mebiuw/article/details/52576884