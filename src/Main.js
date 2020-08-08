import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";

const Main = () => {
  const config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8762/video/all", config).then((res) => {
      setVideos(res.data);
    });
  }, []);
  return (
    <div>
      {videos ? (
        <div className="card-deck ml-5 mr-3 mt-5">
          {videos.map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
        </div>
      ) : (
        <div className="card-deck ml-5 mr-3 mt-5">
          Loading videos, please wait.
        </div>
      )}
    </div>
  );
};

export default Main;
