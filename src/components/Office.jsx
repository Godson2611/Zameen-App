import React from "react";
import Slider from "./Slider";

const Office = () => {
  return (
    <div className='container my-5'>
      <div className='row my-3 my-lg-5'>
        <div className='mx-4 d-flex justify-content-between align-items-center'>
          <div className='d-flex flex-row'>
            <h3 className='fw-normal'>Office Spaces in Mysuru</h3>
            <div className='mx-3 d-none d-lg-block'>
              <button className='btn bg__green text-white mx-2'>
                1200 Sqft
              </button>
              <button className='btn bg__gray text-dark mx-2'>2400 Sqft</button>
            </div>
          </div>
          <div>
            <button className='btn green'>
              See More
              <i class='fa-solid fa-arrow-right ms-2'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='row'>
        <Slider />
      </div>
    </div>
  );
};

export default Office;