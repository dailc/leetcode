## Copy-List-with-Random-Pointer

## 说明
有一个单向链表，每一个节点都有一个额外的指针指向链表中的某一个节点或者`null`。
需要实现链表的深复制功能

假设没有相同的值

### 思路

* 1.用hash存储临时的对象
	* 从head遍历到尾指针，依次复制每个label
	* 每一个的值(label或者random.label)，如果hash里没有，则新建，否则指向建立好的