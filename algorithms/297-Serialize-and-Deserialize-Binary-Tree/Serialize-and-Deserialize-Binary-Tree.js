/* 作者: dailc
 * 时间: 2017-07-29
 * 描述: Serialize-and-Deserialize-Binary-Tree
 * 
 * 来自: https://leetcode.com/problems/find-median-from-data-stream
 */
(function(exports) {

    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    //序列化二叉树
    //请实现两个函数，分别用来序列化和反序列化二叉树
    //这里序列化定义(只需要一个自定义规则即可)，所以这里定义前序遍历二叉树，null用#表示,每一个数值以,隔开

    function serialize(root) {
        var str = '';
        if (root == null) {
            str += '#,';
            return str;
        }
        str += root.val + ',';
        str += serialize(root.left);
        str += serialize(root.right);
        return str;
    }

    //反序列化
    //采用先序遍历的思想每次读取一个结点，如果读取到NULL结点的标识符号“#”，则忽略它。
    //如果读取到结点数值，则插入到当前结点，然后遍历左孩子和右孩子。
    function deserialize(str) {
        if (!str) {
            return null;
        }
        // 节点在序列中的索引
        var index = -1;
        var len = str.length;
        var strArray = str.split(",");
        
        var DeserializeRecursive = function(str) {
            index++;        

            if (index > len) {
                return null;
            }
            
            var node = null;
            if (strArray[index] != '#') {
                //有值
                node = new TreeNode(parseInt(strArray[index]));
                node.left = DeserializeRecursive(str);
                node.right = DeserializeRecursive(str);
            }
            return node;
        }
        return DeserializeRecursive(str);
    }

    /**
     * Your functions will be called as such:
     * deserialize(serialize(root));
     */

    exports.serialize = serialize;
    exports.deserialize = deserialize;

})(window.LeetCode = window.LeetCode || {});