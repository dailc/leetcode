## Letter-Combinations-of-a-Phone-Number

## 说明
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

分析题目，可以得知应该由递归方案来做，需要一个辅助栈，真正用到递归后倒并不是特别复杂