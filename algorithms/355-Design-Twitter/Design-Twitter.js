/* 作者: dailc
 * 时间: 2017-09-05
 * 描述: Design-Twitter
 * 
 * 来自: https://leetcode.com/problems/design-twitter
 */
(function(exports) {
    var Feed = function(count, tweetId) {
        this.count = count;
        this.tweetId = tweetId;
    };

    function PriorityQueue() {
        this.queue = [];
    }

    PriorityQueue.prototype.push = function(feed) {
        var len = this.queue.length;

        if (len == 0) {
            this.queue.push(feed);
        } else {
//          var index = len - 1;
//          for (var i = len - 1; i >= 0; i--) {
//              if (feed.count >= this.queue[i]) {
//                  index = i;
//                  break;
//              }
//          }           
            var index = len;
            
            for (var i = 0; i < len; i++) {
                if (feed.count >= this.queue[i].count) {
                    index = i;
                    break;
                }
            }
            
            this.queue.splice(index, 0, feed);
        }

    };

    PriorityQueue.prototype.pop = function() {
        return this.queue.pop();
    };

    PriorityQueue.prototype.top = function() {
        return this.queue[this.queue.length - 1];
    };

    PriorityQueue.prototype.empty = function() {
        return this.queue.length == 0;
    };
    
    PriorityQueue.prototype.size = function() {
        return this.queue.length;
    };

    /**
     * Initialize your data structure here.
     */
    var Twitter = function() {
        this.feeds = {};
        this.followers = {};
        this.count = 0;
    };

    /**
     * Compose a new tweet. 
     * @param {number} userId 
     * @param {number} tweetId
     * @return {void}
     */
    Twitter.prototype.postTweet = function(userId, tweetId) {
        var feed = new Feed(this.count++, tweetId);

        this.feeds[userId] = this.feeds[userId] || [];
        this.feeds[userId].push(feed);
    };

    /**
     * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
     * @param {number} userId
     * @return {number[]}
     */
    Twitter.prototype.getNewsFeed = function(userId) {
        var res = [],
            len = this.feeds.length,
            users = this.followers[userId] || [],
            // 优先级序列，底部最大
            queue = new PriorityQueue();

        users.push(userId);

        for (var i = 0; i < users.length; i++) {
            if (!this.feeds[users[i]]) {
                continue;
            }
            var currFeeds = this.feeds[users[i]];

            for (var j = 0; j < currFeeds.length; j++) {
                var feed = currFeeds[j];

//              if (queue.size() > 0 && queue.top().count > feed.count && queue.size() > 10) {
//                  break;
//              }

                queue.push(feed);

                if (queue.size() > 10) {
                    queue.pop();
                }
            }
        }
        
        
        users.pop();

        while (!queue.empty()) {
            res.push(queue.top().tweetId);

            queue.pop();
        }
        

        res.reverse();

        return res;
    };

    /**
     * Follower follows a followee. If the operation is invalid, it should be a no-op. 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    Twitter.prototype.follow = function(followerId, followeeId) {
        if (followeeId === followerId) {
            return ;
        }
        
        var currFollee = this.followers[followerId] || [];

        if (currFollee.indexOf(followeeId) === -1) {
            currFollee.push(followeeId);
        }

        this.followers[followerId] = currFollee;
    };

    /**
     * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    Twitter.prototype.unfollow = function(followerId, followeeId) {
        var index;

        if (this.followers[followerId] && (index = this.followers[followerId].indexOf(followeeId)) !== -1) {
            this.followers[followerId].splice(index, 1);
        }
    };

    exports.Twitter = Twitter;

})(window.LeetCode = window.LeetCode || {});