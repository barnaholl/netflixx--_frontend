import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VideoDetails = (props) => {
  const id = props.match.params.videoId;
  const [video, setVideo] = useState(null);

  console.log(video);

  useEffect(() => {
    axios.get(`http://localhost:8762/video/${id}`).then((res) => {
      setVideo(res.data);
    });
  }, []);

  return (
    <div>
      {video ? (
        <div>
          <iframe width="600" height="420" src={video.url}></iframe>
          <h1>{video.name}</h1>
          <br></br>
          {video.recommendations.map((rec, index) => (
            <div>
              <h2>
                {rec.comment}
                <br></br> Rating:{rec.rating}
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading video data...</p>
      )}
    </div>
  );
};

export default VideoDetails;
