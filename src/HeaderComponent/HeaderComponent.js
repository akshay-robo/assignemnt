import React, { useState, useEffect } from "react";
import "./HeaderComponent.css";
import { getBannerImageFetch } from "../api";
import logo from "../assests/logo.png";
import { getphotoListFetch } from "../api";

const HeaderComponent = () => {
  const [bannerImage, setbannerImage] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getBannerImageFetch();
      setbannerImage(data);
    };
    fetchAPI();
  }, []);

  const handleValueChange = (val) => {
    if (!val) {
      return;
    }
    setSearch(val);
  };
  return (
    <>
      {bannerImage && (
        <div className=" Banner-section">
          <div className="container">
            <div className="logo">
              <img src={logo} className="img-fluid" />
            </div>
          </div>
          <img className="banner-img" src={bannerImage[1].src["landscape"]} />
          <div className="description-section">
            <div className="title-section">
              <h2 className="text-center">
                Discover the world's best photos and videos
              </h2>
              <p className="text-center">Best memories online</p>
            </div>
            <div className="row justify-content-center mt-5 mr-0">
              <div className="col-12 col-md-10 col-lg-8">
                <div className=" row no-gutters align-items-center">
                  <div className="col-auto">
                    <i className="fas fa-search h4 text-body"></i>
                  </div>

                  <div className="col">
                    <input
                      className="form-control searchBar"
                      type="search"
                      placeholder="Search photos, videos ,artists"
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-auto">
                    <button
                      className="btn btn-lg btn-success searchBarBtn"
                      onClick={() => handleValueChange(search)}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
