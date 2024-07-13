import React from "react";
import AgentSlider from "./AgentSlider";

const Agents = () => {
  return (
    <div className="container">
      <div className="row my-3 my-lg-5">
        <div className="col d-flex flex-column align-items-center">
          <h3 className="display-6 fw-normal">Agents in Mysuru</h3>
          <p className="text-muted w-75 text-center">
            Lorem ipsum dolor sit amet consectetur. Libero lobortis donec velit
            habitant. Lectus aliquam adipiscing id auctor et cursus lectus
            dictum. Morbi ac.
          </p>
        </div>
      </div>
      <div className="row">
        <AgentSlider />
      </div>
    </div>
  );
};

export default Agents;
