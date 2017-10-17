/* 
 * 一刷时间: 2016-12-10
 * 二刷时间：2017-10-16
 * 来自: https://leetcode.com/problems/add-two-numbers/description/
 */
(function(exports) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    ListNode.prototype.print = function(list) {
        let result = this.val;
        let tmp = this;

        while (tmp.next) {
            tmp = tmp.next;
            if (tmp.val !== undefined) {
                result += '->' + tmp.val
            }

        }
        return result;
    };

    ListNode.prototype.append = function(val) {
        const tmp = new ListNode(val);
        this.next = tmp;
        return tmp;
    };

    exports.ListNode = ListNode;

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    function addTwoNumbers(l1, l2) {
        let res;
        let pre;
        let carry = 0;

        while (l1 || l2 || carry) {
            const addElem1 = l1 ? (l1.val || 0) : 0;
            const addElem2 = l2 ? (l2.val || 0) : 0;

            let sum = addElem1 + addElem2 + carry;

            carry = ~~(sum / 10);
            sum = sum % 10;

            const nowNode = new ListNode(sum);

            if (pre) {
                pre.next = nowNode;
                pre = nowNode;
            } else {
                res = nowNode;
                pre = nowNode;
            }
            
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return res;
    }

    exports.addTwoNumbers = addTwoNumbers;
    /**
     * @description 求两个链表的和
     * 时间复杂度 0(N)
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @param {ListNode}
     */
    exports.addTwoNumber1 = function(list1, list2) {
        var result, old = result;
        //保存进位
        var carry = 0;
        //有一种情况 比如 2->5  与2->5 相加  结果需要是  4->0->1  所以,carry不为0也要算进去
        while (list1 || list2 || carry) {
            var tmp1 = list1 ? (list1.val || 0) : 0;
            var tmp2 = list2 ? (list2.val || 0) : 0;
            var sum = tmp1 + tmp2 + carry;
            //取到进位，可以试试用 ~~ 替代 Math.floor
            //~~是取反两次，可以去掉小数部分(因为位运算要求是整数，结果会自动转为整数)
            carry = Math.floor(sum / 10);
            var tmpNode = new ListNode(sum % 10);
            if (!result) {
                result = tmpNode;
                old = result;
            } else {
                old.next = tmpNode;
                old = old.next;
            }
            list1 = list1 ? list1.next : null;
            list2 = list2 ? list2.next : null;
        }
        return result;
    };

})(window.LeetCode = window.LeetCode || {});