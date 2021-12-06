import React from "react";
import Form from "./Form";
import Navbar from "./navbar";

function Main() {
  return (
    <>
      <div className="container ">
        <Navbar />
      </div>
      <div className="container container-margin">
        <Form />
      </div>
    </>
  );
}

export default Main;
