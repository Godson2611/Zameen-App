import React from "react";
import Banner from "./Banner";
import SearchCard from "./SearchCard";

const HeaderBind = () => {
  return (
    <div className="position-relative">
      <Banner />
      <SearchCard />
    </div>
  );
};

export default HeaderBind;
