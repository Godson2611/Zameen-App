import React, { Children } from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
