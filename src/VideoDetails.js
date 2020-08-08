import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VideoDetails = (props) => {
  const id = props.key;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8762/video/${id}`).then((res) => {
      setVideo(res.data);
    });
  }, []);

  return (
    <div>
      {video ? (
        <div>
          <iframe width="420" height="300" src={video.url}></iframe>
          <p></p>

          <Link to={`/details/${video.id}`} key={video.id}>
            {video.name}
          </Link>
          <p></p>
        </div>
      ) : (
        <p>Loading video data...</p>
      )}
    </div>
  );
};

export default VideoDetails;
