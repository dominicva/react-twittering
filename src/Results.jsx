import User from './User';
import Tweet from './Tweet';

const Results = ({ user, tweets }) => {
  return (
    <section>
      {Object.values(user).length > 0 ? (
        <User
          key={user.id}
          name={user.name}
          username={user.username}
          location={user.location}
        />
      ) : (
        <h1>User not found...</h1>
      )}

      <div>
        {tweets.length > 0 ? (
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
        ) : (
          <h1>No tweets found</h1>
        )}
      </div>
    </section>
  );
};

export default Results;
