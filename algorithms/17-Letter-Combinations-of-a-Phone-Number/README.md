# Letter-Combinations-of-a-Phone-Number

## 说明

给一个数字字符串，根据数字与字符的映射表，返回所有可能的字符组合

题目的映射表如下:

```
switch (numStr) {
case '0':
    return '';
case '1':
    return '';
case '2':
    return 'abc';
case '3':
    return 'def';
case '4':
    return 'ghi';
case '5':
    return 'jkl';
case '6':
    return 'mno';
case '7':
    return 'pqrs';
case '8':
    return 'tuv';
case '9':
    return 'wxyz';
}
```

示例

```js
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

### 思路

dfs深搜，需要一个辅助栈