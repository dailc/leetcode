## Design-Twitter

## 说明

设计一个简单的`twitter`

- 用户可以发生推文

- 可以`follow/unfollow`另一个用户

- 可以看到用户最近的`10`条推文，需要支持如下API

    - `postTweet(userId, tweetId)`，发新的推文
    
    - `getNewsFeed(userId)`，获取用户最近10条推文，每一条目必须是用户`follow`的人发布或者是用户自身发布，时间排序从最近到最久
    
    - `follow(followerId, followeeId)`，跟随一个用户
    
    - `unfollow(followerId, followeeId)`，取消跟随
    
例如

```js
Twitter twitter = new Twitter();

// User 1 posts a new tweet (id = 5).
twitter.postTweet(1, 5);

// User 1's news feed should return a list with 1 tweet id -> [5].
twitter.getNewsFeed(1);

// User 1 follows user 2.
twitter.follow(1, 2);

// User 2 posts a new tweet (id = 6).
twitter.postTweet(2, 6);

// User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.getNewsFeed(1);

// User 1 unfollows user 2.
twitter.unfollow(1, 2);

// User 1's news feed should return a list with 1 tweet id -> [5],
// since user 1 is no longer following user 2.
twitter.getNewsFeed(1);
```

### 思路

- 用优先级队列每次取出前10条