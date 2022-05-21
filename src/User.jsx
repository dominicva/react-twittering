const User = ({ name, username, location }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>@{username}</h3>
      {location && <p>Location: {location}</p>}
    </div>
  );
};

export default User;
