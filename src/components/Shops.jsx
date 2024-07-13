import React from "react";
import Slider from "./Slider";

const Shops = () => {
  return (
    <div className="container my-5">
      <div className="row my-3 my-lg-5">
        <div className="mx-4 d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row">
            <h3 className="fw-normal">
              Commercial Shops in Vijayanagara, Mysuru{" "}
            </h3>
          </div>
          <div>
            <button className="btn green">
              See More
              <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <Slider />
      </div>
    </div>
  );
};

export default Shops;
