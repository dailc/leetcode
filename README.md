# leetcode
leetcode之javascript大法。用自己的思路去解题。不定期更新。

### 1.Two Sum
采用JS的{}或[]来存储，一次for循环即可找到值，时间复杂度O(N),空间复杂度O(N)


[Source Code](https://github.com/dailc/leetcode/blob/master/algorithms/Two%20Sum/two-sum.js)

### 2.Add Two Number
注意审题:
2->4->3 代表逆序存储的342

5->6->4 代表逆序存储的465

7->0->8 代表逆序存储的807

所以,其实题目的意思是求两个这样的链表的和，并通用以链表方式表示出来。

解题思路:
只需要构建链表，存储一个进位即可(比如2+8,那么下一位的进位为1)。
注意最后进位如果不为0，需要增加一位(比如5 +5 结果为0->1)

[Source Code](https://github.com/dailc/leetcode/blob/master/algorithms/Add%20Two%20Number/add-two-number.js)
 

