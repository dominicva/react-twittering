const User = ({ name, username, location, avatarUrl }) => {
  const profileUrl = `https://twitter.com/${username}`;

  return (
    <a
      className="card user-card"
      href={profileUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <img className="avatar" src={avatarUrl} alt={name} />
        <h1>{name}</h1>
        <h3>@{username}</h3>
        {location && <p>Location: {location}</p>}
      </div>
    </a>
  );
};

export default User;
