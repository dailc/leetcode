# Text-Justification

## 说明

css中的一个文本算法，例如，给定:

```js
["This", "is", "an", "example", "of", "text", "justification."]
```

以及长度16，返回如下:

```js
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

给定一个单词数组和长度`L`，格式化文本，使得每一行有`L`长度的字符(每个单词间至少有一个空格)，并且完全(左右)对齐。
可以保证数组内部的字符长度绝对不会超过长度`L`。
行一行需要左右对齐，中间要用空格来均匀分布，填充对于的空格。
如果空格不能均匀分配，左侧的空格要比右侧多。
对于最后一行，它应该左对齐，并且单词间没有额外空格

## 思路

- 1.纯粹的字符操作

	- `count`计数记录当前长度
	
	http://www.cnblogs.com/springfor/p/3896168.html