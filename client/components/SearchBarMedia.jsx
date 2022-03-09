import React from "react";
import Poster from "./Poster.jsx";
import Buttons from "./Buttons.jsx";

const searchBarMedia = (props) => {

  console.log('in mediaCard TMBDid', props.tmdbId);

  return (
    <div className="media-card">
      <div
        onClick={() =>
          window.open(`https://www.themoviedb.org/movie/${props.tmdbId}`)
        }
        className="mediaCard"
      >
        <Poster key={`poster ${props.key}`} tmdbId={props.tmdbId} />
      </div>
      <div className="buttons">
        <Buttons urlBase="/" tmdbId={props.tmdbId}/>
      </div>
    </div>
  );
};

export default searchBarMedia;