import React from 'react';
import EpisodeSearch from "../Header/EpisodeSearch/index";
const NotFound = () => {
  return (
   <div className="not_found_page">
     <h2>404 page not found</h2>
     <h3>We are sorry but the page you are looking for does not exist </h3>
     <h3> search current episodes</h3>
    <EpisodeSearch />
   
   </div>
  );
}

export default NotFound;
