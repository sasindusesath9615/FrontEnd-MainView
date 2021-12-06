import React from "react";
import Navbar from "../navbar";
import ContainerOne from "./Container_one";
import ContainerTwo from "./Container_two";
import Searchbar from "../searchbar";

function Main() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container container-margin">
        <Searchbar />
      </div>

      <div className="container container-margin">
        <ContainerOne />
      </div>

      <div className="container container-margin">
        <ContainerTwo />
      </div>
    </>
  );
}

export default Main;
