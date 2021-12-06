import React from "react";
import Navbar from "../navbar";
import SingleProduct from "./SingleProduct";
import Searchbar from "../searchbar";
import { useGlobalContext } from "../../../context";

function Main() {
  const { detailProduct } = useGlobalContext();

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container container-margin">
        <Searchbar />
      </div>

      <div className="container">
        <SingleProduct {...detailProduct} />
      </div>
    </>
  );
}

export default Main;
