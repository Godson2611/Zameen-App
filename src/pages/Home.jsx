import React from "react";
import Layouts from "../layouts/Layouts";
import Main from "../containers/Main";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Layouts>
        <Main />
      </Layouts>
    </div>
  );
};

export default Home;
