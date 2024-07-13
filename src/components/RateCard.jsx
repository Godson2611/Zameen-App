import React from "react";

const RateCard = () => {
  return (
    <div className="container mb-4 mb-sm-5 d-flex position-relative justify-content-center my-3 my-lg-5">
      <div className="card bg-dark text-white rounded-5 border-0">
        <img
          src="https://zameensquare.com/_next/static/media/subscribe.b5ba2647.png"
          className="card-img rounded-5 img-fluid"
          alt="card-img-overlay"
        />
        <div className="container">
          <div className="card-img-overlay text-start d-flex flex-column justify-content-center px-md-5 overflow-auto w-100">
            <h3 className="card-title fw-semibold mt-3 mt-md-0">
              Please Subscribe
            </h3>
            <p className="card-text fs-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et.
            </p>
            <div className="d-none d-md-flex justify-content-start gap-3 mt-3">
              <input
                type="text"
                className="form-control w-50 py-2"
                placeholder="Enter your email address"
              />
              <button className="btn btn-primary text-uppercase py-2 px-4 fw-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
