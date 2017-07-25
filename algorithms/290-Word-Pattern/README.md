## Word-Pattern

## 说明

给一个模式`pattern`以及字符串`str`，判断字符串是否匹配对应模式

例如

1. pattern = "abba", str = "dog cat cat dog" should return true.

2. pattern = "abba", str = "dog cat cat fish" should return false.

3. pattern = "aaaa", str = "dog cat cat dog" should return false.

4. pattern = "abba", str = "dog dog dog dog" should return false.

假设`pattern`和`str`只包含小写字母，并且`str`中以空格分割单词

### 思路

- 先进行字符串分割，然后遍历判断`O(N)`

    - 需要用到`hash`缓存