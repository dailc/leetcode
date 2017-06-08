## Repeated-DNA-Sequences

## 说明
DNA由一系列的核苷酸组成，可以缩写为`A`,`C`,`G`以及`T`，例如:`ACGAATTCCG`

当研究DNA时，有时候需要识别DNA中的重复序列。

写出一个程序，找到DNA中所有重复出现的序列(序列要求长度为`10`个字符)，例如:

```
s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Return:
["AAAAACCCCC", "CCCCCAAAAA"]
```

### 思路

* 1.使用hash + 二进制操作
	* 将ACGT进行二进制编码
	* `A -> 00`、`C -> 01`、`G -> 10`、`T -> 11`
	* 在编码的情况下，每10位字符串的组合即为一个数字
	* 20位的二进制数，至多有2^20种组合，因此hash table的大小为2^20，即1024 * 1024
	* 每次向右移动1位字符，相当于字符串对应的int值左移2位，再将其最低2位置为新的字符的编码值，最后将高2位置0
	
	http://www.cnblogs.com/hzhesi/p/4285793.html
	http://www.cnblogs.com/grandyang/p/4284205.html
	
```
	src CAAAAAAAAAC

	subStr CAAAAAAAAA
	
	int 0100000000

	subStr AAAAAAAAAC
	
	int 0000000001
```