import React from "react";
import bg from "../img/bg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

const Hero = () => {
  return (
    <>
      <div
        className="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative bg-img"
        style={{
          background: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundColor: "#ffd2d2",
        }}
      >
        <div className="row w-75">
          <div className="col-lg-6 ml-5">
            <div className="overlay-text text-dark text-lg-start text-center">
              <p className="lead">All Collection 2024</p>
              <h1 className="display-4 fw-bold">NEW ARRIVALS</h1>
              <Link to="/shop" className="btn btn-dark rounded-pill px-3 mt-2">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
