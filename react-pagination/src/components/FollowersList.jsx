import React from "react";

function FollowersList({ avatar_url, html_url, login }) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="user-img" src={avatar_url} alt="" />
      </div>
      <h2 className="flw-title">{login}</h2>
      <button className="flw-link">
        <a target="_blank" href={html_url}>
          User Profile
        </a>
      </button>
    </div>
  );
}

export default FollowersList;
