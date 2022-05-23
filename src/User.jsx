import { useState } from 'react';

const User = ({
  name,
  username,
  location,
  avatarUrl,
  description,
  publicMetrics,
  handleClick,
}) => {
  const profileUrl = `https://twitter.com/${username}`;

  const [buttonStatus, setButtonStatus] = useState(true);

  return (
    <div className="card user-card">
      <a href={profileUrl} target="_blank" rel="noreferrer">
        <img className="avatar" src={avatarUrl} alt={name} />
        <h1>{name}</h1>
        <h3>@{username}</h3>
      </a>
      {location && <p>Location: {location}</p>}
      {description && <blockquote>{description}</blockquote>}
      <p>All time tweets: {publicMetrics.tweet_count}</p>
      <button
        onClick={() => {
          handleClick();
          setButtonStatus(!buttonStatus);
        }}
      >
        {buttonStatus ? 'Show' : 'Hide'} recent tweets
      </button>
    </div>
  );
};

export default User;
