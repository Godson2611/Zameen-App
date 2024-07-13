import React from "react";
import HeaderBind from "../components/HeaderBind";
import RateCard from "../components/RateCard";
import Popular from "../components/Popular";
import Project from "../components/Project";
import Location from "../components/Location";
import Residential from "../components/Residential";
import Office from "../components/Office";
import Shops from "../components/Shops";
import Agents from "../components/Agents";

const Main = () => {
  return (
    <>
      <HeaderBind />
      <Popular />
      <Project />
      <Location />
      <Residential />
      <Office />
      <Shops />
      <Agents />
      <RateCard />
    </>
  );
};

export default Main;
