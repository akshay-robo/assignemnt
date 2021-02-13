import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="bottom section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="copyright">
              <p>
                ©
                <a href="https://www.robosoftin.com/" className="transition">
                  Robosoft Technologies 1996-2021
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
