import React from "react";
import Slider from "./Slider";

const Residential = () => {
  return (
    <div className="container my-5">
      <div className="row my-3 my-lg-5">
        <div className="col-12 my-2 my-lg-4 d-flex justify-content-between">
          <h3 className="fw-normal">
            Residential Houses & Villas in Prime Locations
          </h3>
          <button className="btn green">
            See More
            <i class="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
        <div className="d-none d-lg-block">
          <div className="col-12 d-flex justify-content-center gap-5">
            <p>Select number of bedrooms here</p>
            <div className="mx-3">
              <button className="btn bg__green text-white mx-2">2 BHK</button>
              <button className="btn bg__gray text-dark mx-2 btn-outline-dark">
                + 2 BHK
              </button>
              <button className="btn bg__gray text-dark mx-2 btn-outline-dark">
                + 3 BHK
              </button>
              <button className="btn bg__gray text-dark mx-2 btn-outline-dark">
                + 4 BHK
              </button>
              <button className="btn bg__gray text-dark mx-2 btn-outline-dark">
                + 5 BHK
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Slider />
      </div>
    </div>
  );
};

export default Residential;
