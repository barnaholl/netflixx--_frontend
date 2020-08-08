import React, { useState } from "react";

const VideoCard = (props) => {
  const video = props.video;

  return (
    <div>
      <iframe width="420" height="300" src={video.url}></iframe>
      <p>{video.name}</p>
    </div>
  );
};

export default VideoCard;
