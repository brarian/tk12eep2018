import React from 'react';

const EpisodeSearch = () => {
  return (
    <React.Fragment>
      <div>
        <form className="nav-search">
          <label>Episode Search</label>
          <input type="search"></input>
        </form>
      </div>
      <div className="link-list-container">
        <ul>
          <li>
            <a href="#"><i className="fas fa-step-forward"></i> Latest Episodes</a>
          </li>
          <li>
            <a href="#"><i className="fas fa-step-forward"></i> Seasons</a>
          </li>
          <li>
            <a href="#"><i className="fas fa-step-forward"></i> Playlists</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default EpisodeSearch;
