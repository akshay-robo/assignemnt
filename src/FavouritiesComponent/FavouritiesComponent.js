import React, { useEffect, useState } from "react";
import { getfavouritesPhotosListFetch } from "../api";
import { getfavouritesVideosListFetch } from "../api";

import QierPlayer from "qier-player";

const FavouritiesComponent = () => {
  let photosListvalue = localStorage.getItem("photo");
  let videossListvalue = localStorage.getItem("vidoes");

  if (photosListvalue) {
    photosListvalue = photosListvalue.split(",");
  }
  if (videossListvalue) {
    videossListvalue = videossListvalue.split(",");
  }

  const [favphotos, setfavphotos] = useState([]);
  const [favpvideos, setfavpvideos] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const photosList = await getfavouritesPhotosListFetch(photosListvalue);
      const videossList = await getfavouritesVideosListFetch(videossListvalue);
      setfavphotos(photosList);
      setfavpvideos(videossList);
      console.log(videossList, "videossList");
      console.log(favpvideos, "favpvideos");
    };
    fetchAPI();
  }, []);

  return (
    <div className="container">
      <div className="photo-section">
        <div className="row">
          {favphotos &&
            favphotos.map((item) => (
              <div
                key={item["data"].id}
                className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe"
              >
                <img
                  src={item["data"]["src"]["landscape"]}
                  className="img-fluid"
                ></img>
              </div>
            ))}
        </div>

        <div className="photo-section">
          <div className="row">
            {favpvideos &&
              favpvideos.map((item) => (
                <div
                  key={item["data"].id}
                  picture-id={item["data"].id}
                  className="video_gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe"
                >
                  <QierPlayer
                    height="100%"
                    width="100%"
                    srcOrigin={item["data"]["video_files"][0]["link"]}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritiesComponent;
