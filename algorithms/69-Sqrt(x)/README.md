# Sqrt(x)

## 说明

实现`sqrt(int x)`的功能。

示例：

```js
Input: 4
Output: 2
```

```js
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842...
```

## 思路

- 1.二分法，由于是整形，所以更方便

- 2.牛顿法，`y_(n+1)=y_n-f(n)/f'(n)=(y_n+x/y_n)/2`
http://blog.csdn.net/doc_sgl/article/details/12404971