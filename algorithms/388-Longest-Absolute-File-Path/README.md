## Longest-Absolute-File-Path

## 说明

功能是提取文件路径（字符串形式）

例如`dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext`

```js
dir
    subdir1
    subdir2
        file.ext
```

`dir`有子目录`subdir1`和`subdir2`，以及一个文件`file.ext`(包含在`subdir2`中)

例如`dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext`

```js
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```

`\n\t...`表示子目录

`\n\t\t..`表示子目录的自己目录

我们需要找到一个最长字符串的绝对路径，例如上例中的最长路径是

`dir/subdir2/subsubdir2/file2.ext`，长度为`32`(不包含双引号)

如果没有这样的路径，返回`0`

注意

- 文件的名字至少包含一个`.`以及相应的后缀

- 目录和子目录不包含`.`

- `O(N)`时间复杂度

另外，如果同时有

```js
a/aa/aaa/file1.txt
aaaaaaaaaaaaaaaaaaaaa/sth.png
```

那么下面那个才是最长路径（因为只计算字符串长度）

### 思路

- 第一步要考虑如何分割

字符串分割`\n\ts`，获得所有的子目录

然后遍历，根据`\t`来决定当前`paths[i]`的字符串

- 然后才是如何计算最长字符串

每次保留一个最大的合法字符