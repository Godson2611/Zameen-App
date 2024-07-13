import React from "react";

const Banner = () => {
  return (
    <div id="carouselBanner" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img
            src="https://zameensquare.com/_next/static/media/Post-Property-Banner.f6ea47b2.jpg"
            class="d-block w-100 object-fit-cover object-fit-lg-fill"
            alt="Banner1"
            height={500}
          />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif"
            class="d-block w-100 object-fit-cover object-fit-lg-fill"
            alt="Banner2"
            height={500}
          />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-web(new).d119e432.gif"
            class="d-block w-100 object-fit-cover object-fit-lg-fill"
            alt="Banner3"
            height={500}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBanner"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselBanner"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
