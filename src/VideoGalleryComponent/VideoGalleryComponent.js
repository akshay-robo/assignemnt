import React, { useEffect, useState } from "react";
import { getvideoListFetch } from "../api";
import "./VideoGalleryComponent.css";
import ReactDOM from "react-dom";
import QierPlayer from "qier-player";

const VideoGalleryComponent = () => {
  const [videos, setVideos] = useState([]);
  const defaultFilter = "animals";

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getvideoListFetch(defaultFilter);
      setVideos(data);
    };
    fetchAPI();
  }, []);

  let selectedVideos = [];
  const selectedImage = (id) => {
    selectedVideos.push(id);
    selectedVideos = [...new Set(selectedVideos)];
    localStorage.setItem(`vidoes`, selectedVideos);
  };

  return (
    <div className="container">
      <div className="photo-section">
        <div className="row">
          {videos &&
            videos.map((item) => (
              <div
                onClick={() => selectedImage(item.id)}
                key={item.id}
                picture-id={item.id}
                className="video_gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe"
              >
                <QierPlayer
                  height="100%"
                  width="100%"
                  srcOrigin={item["video_files"][0]["link"]}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryComponent;
