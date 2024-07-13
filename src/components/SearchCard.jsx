import React from "react";

const SearchCard = () => {
  return (
    <div className="container position-relative bottom-0 start-50 mx-md-5 translate-middle z-index-1">
      <div class="card">
        <div class="card-body">
          <div className="row g-3">
            <div className="col-12 mx-3">
              <a
                class="icon-link link-primary icon-link-hover link-underline-dark fw-bold px-2"
                href="#"
              >
                Buy
              </a>
              <a
                class="icon-link link-primary icon-link-hover link-underline-dark fw-bold px-2"
                href="#"
              >
                Rent
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
