## Linked-List-Random-Node

## 说明

给一个单链表，返回一个随机节点，需要注意

- 所有节点的概率相同

- 如果链表特别大，并不知道长度，能否再常数空间解决

例如

```js
// Init a singly linked list [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
solution.getRandom();
```

### 思路

- 蓄水池抽样法

根据概率论

对于任意一个数i来说, 其被选择的概率为`1/i*(1-1/(i+1))*...*(1-1/n)`

在每一个数的时候我们只要按照随机一个是否是i的倍数即可决定是否取当前数即可

http://blog.csdn.net/qq508618087/article/details/52188179