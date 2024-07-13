import React from "react";
import ProjectSlider from "./ProjectSlider";

const Project = () => {
  return (
    <div className="container">
      <div className="row mb-3 my-lg-5">
        <div className="col d-flex flex-column align-items-center">
          <h3 className="display-6 fw-normal">Projects in Mysuru</h3>
          <p className="text-muted w-75 text-center">
            Lorem ipsum dolor sit amet consectetur. Libero lobortis donec velit
            habitant. Lectus aliquam adipiscing id auctor et cursus lectus
            dictum. Morbi ac.
          </p>
        </div>
      </div>
      <div className="row">
        <ProjectSlider />
      </div>
    </div>
  );
};

export default Project;
