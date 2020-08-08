import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = (props) => {
  const video = props.video;

  return (
    <div>
      <iframe width="420" height="300" src={video.url}></iframe>
      <p></p>

      <Link to={`/details/${video.id}`} key={video.id} video={video}>
        {video.name}
      </Link>
      <p></p>
    </div>
  );
};

export default VideoCard;
