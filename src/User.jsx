const User = ({ name, username, location }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>@{username}</h2>
      {location && <p>Location: {location}</p>}
    </div>
  );
};

export default User;
