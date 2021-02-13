import React from "react";
import logo from "../assests/logo.png";
const HeaderComponentV2 = () => {
  return (
    <nav className="navbar navbar-expand-xl nav_area sticky">
      <div className="container">
        <div className="logo">
          <img src={logo} className="img-fluid" />
        </div>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto navbar-center main_menu onepage_nav">
            <div className=" row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div>

              <div className="col">
                <input
                  className="form-control searchBar"
                  type="search"
                  placeholder="Search photos, videos ,artists"
                />
              </div>

              <div className="col-auto">
                <button
                  className="btn btn-lg btn-success searchBarBtn"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponentV2;
