import { useState } from 'react';
import User from './User';
import Tweet from './Tweet';

const Results = ({ user, tweets }) => {
  const [showTweets, setShowTweets] = useState(false);

  return (
    <section>
      {Object.values(user).length > 0 ? (
        <User
          key={user.id}
          name={user.name}
          username={user.username}
          location={user.location}
          avatarUrl={user.profile_image_url}
          description={user.description}
          publicMetrics={user.public_metrics}
          handleClick={() => setShowTweets(!showTweets)}
        />
      ) : (
        <h1>User not found...</h1>
      )}

      <div>
        {tweets.length > 0 && showTweets && (
          <ul>
            {tweets.map(t => {
              const {
                id,
                text,
                created_at: createdAt,
                public_metrics: publicMetrics,
              } = t;

              return <Tweet key={id} {...{ text, createdAt, publicMetrics }} />;
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Results;
