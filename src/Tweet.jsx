const Tweet = ({
  text,
  createdAt,
  publicMetrics: {
    like_count: likes,
    quote_count: quoteCount,
    reply_count: replies,
    retweet_count: reTweets,
  },
}) => {
  return (
    <li className="tweet-card">
      <blockquote>{text}</blockquote>
      <p>{new Date(createdAt).toDateString()}</p>
      <ul>
        <li>Likes: {likes}</li>
        <li>Quoted {quoteCount} times</li>
        <li>{replies} replies</li>
        <li>{reTweets} retweets</li>
      </ul>
    </li>
  );
};

export default Tweet;
