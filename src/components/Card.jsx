import React from "react";

const Card = () => {
  return (
    <div className="card border-0 mx-2 p-2 rounded-5">
      <img
        className="card-img-top rounded-5 object-fit-cover"
        src="https://s3-alpha-sig.figma.com/img/9061/1c0b/740cfe7923702cf61e5b5a614f947e22?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQqJRWAsdaoiMGAWIjHHyolvgeo5iluApJ6UXMrjgixu2OZtPuGqNr1~IrpKCtAKx9EKJmHs9zZkb2zXB0kyvAgc2aXYAG3UhffaPv0elEshdMswuGMg4IL27NOfer4DGuYfUsXPApztRnukZlrudUfsiIYLVSDXnceHqep2I7XT~rWoylIYMO7ILtHuBmr~fq08zLftPqGYso7oVNYTn5HUzJV4UXY8ZsnFbGDZPHwBOrNXzNvTSBE7grpaNDmrhnQ7~JGWtS09KXbZAeqdcenCqmZwKKpjsq7ll-AoUa3T1Q4mfDzMq066JVJpgJ-OlZxX4vzLEej9T4oqQkSj1A__"
        alt="Property"
        height={200}
      />
      <div className="container">
        <h3 className="mt-2 fw-semibold blue">₹ 70 Lac</h3>
        <p className="font-weight-bold">2BHK flat in Vijayanagar, Mysuru</p>
        <div className="d-flex mb-3">
          <i className="opacity-50 lead bi bi-geo-alt-fill"></i>
          <small className="opacity-50">
            2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd, Mysuru -
            570017
          </small>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <i class="fa-regular fa-square blue px-2"></i>
            2400 Sqft
          </div>
          <div>
            <i class="fa-solid fa-sink blue px-2"></i>3 wash
          </div>
          <div>
            <i class="fa-solid fa-couch blue px-2"></i>
            Furnished
          </div>
        </div>
        <div className="row d-flex mt-2 justify-content-between">
          <div className="col d-flex justify-content-between align-items-center mt-3">
            <div>
              <small className="text-muted">Posted on</small>
              <p className="text-muted">27/Sep/2021</p>
            </div>
            <div>
              <button type="button" className="btn btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
