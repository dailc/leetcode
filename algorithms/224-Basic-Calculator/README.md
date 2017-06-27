## Basic-Calculator

## 说明
实现一个基础的计算器，计算简单的表达式

表达式包含:`(`,`)`,`+`,`-`,`非负整数`以及`空格`

假设给出的每一个表达式都是正常可以运行的，例如:

```
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
```

- 请不要使用`eval`
- 请不要使用一些内置函数库

### 思路

- 递归，每一次递归分为有括号的(递归)和没括号的(计算完毕)
    - 在超长字符串时，超时
    
- 优化为循环计算方式
    - 遇到`(`就压栈res和symble