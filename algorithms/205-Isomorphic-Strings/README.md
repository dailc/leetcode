## Isomorphic-Strings

## 说明
判断两个字符串`s`和`t`，判断它们是否是`同构数`

定义:
如果`s`可以通过字符替换变成`t`，那么它们之间就是同构数

注意，每一个字符可以映射成其它的字符，但是不同的两个字符不能映射成同一个字符(字符可以映射成自己)

例如:

```
"egg", "add" return true
```

```
"foo", "bar" return true
```

```
"paper", "title" return true
```

假设两个字符有相同的长度

### 思路

* 1.用两个hashtable，分别统计各自字符出现的数量
    * 然后依次比较