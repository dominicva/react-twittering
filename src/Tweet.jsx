const Tweet = ({ name, username, location }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>@{username}</h2>
      <p>Location: {location}</p>
    </div>
  );
};

export default Tweet;
