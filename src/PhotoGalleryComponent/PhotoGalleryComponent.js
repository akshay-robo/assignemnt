import React, { useEffect, useState } from "react";
import { getphotoListFetch } from "../api";
import "./PhotoGalleryComponent.css";
import deselect from "../assests/Icon-heart-deselect.png";

const PhotoGalleryComponent = () => {
  const [photos, setPhotos] = useState([]);
  const defaultFilter = "animals";

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getphotoListFetch(defaultFilter);
      setPhotos(data);
    };
    fetchAPI();
  }, []);
  let selectedImages = [];
  const selectedImage = (id) => {
    selectedImages.push(id);
    selectedImages = [...new Set(selectedImages)];
    localStorage.setItem(`photo`, selectedImages);
  };

  return (
    <div className="container">
      <div className="photo-section">
        <div className="row">
          {photos &&
            photos.map((item) => (
              <div
                onClick={() => selectedImage(item.id)}
                key={item.id}
                className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe"
              >
                <img src={item["src"]["landscape"]} className="img-fluid"></img>
                <div className="heart-section">
                  <img src={deselect} />
                </div>
                <div className="author-section">
                  <p>{item.photographer}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryComponent;
