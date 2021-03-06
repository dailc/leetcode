## Evaluate-Reverse-Polish-Notation

## 说明
计算算法表达式的值[Reverse Polish notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

有效的操作符是: `+, -, *, /`，每一个操作符相连的必须是一个整数或者另一个表达式，例如:

```
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
```

### 思路

* 1.递归
	* 根据示例可知，最后一个操作符的优先级是最低的
	* 出栈最后一个元素，最为操作符
	* 出栈倒数第二个元素，如果是整数，继续出栈上一个操作符
	* 如果是操作符，最为子式，继续回到第2步
