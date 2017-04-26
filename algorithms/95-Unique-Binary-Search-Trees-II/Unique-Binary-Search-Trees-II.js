/* 作者: dailc
 * 时间: 2017-04-26
 * 描述: Unique-Binary-Search-Trees-II
 * 
 * 来自: https://leetcode.com/problems/unique-binary-search-trees-ii
 */
(function(exports) {

  //Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
      this.left = this.right = null;
  }
 
	/**
	 * @description generateTrees
	 * @param {number} n
 	 * @return {TreeNode[]}
	 */
	exports.generateTrees = function(n) {
		if(n<1) {
			return [];
		}
		
		return helper(1,n);
	};
	
	function helper(start,end) {
		var res = [];
		if(start>end) {
			res.push(null);
			return res;
		}
		for( var k = start; k <= end; k ++ ) {
			var leftChild = helper(start,k-1);
			var rightChild =  helper(k+1,end);
			
			for(var i=0;i<leftChild.length;i++)  
            {  
                for(var j=0;j<rightChild.length;j++)  
                {  
                	var root = new TreeNode(k);
					root.left = leftChild[i];
					root.right = rightChild[j];
					res.push(root);
                   
                }  
            }  
		}
		return res;
	}
	
	
})(window.LeetCode = window.LeetCode || {});