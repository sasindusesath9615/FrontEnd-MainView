import React from "react";
import Navbar from "../navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "../../../context";

function Main() {
  const { cart } = useGlobalContext();
  return (
    <>
      {/* ================NAVBAR==================== */}
      <div>
        <Navbar />
      </div>
      
      {/* ==================MAIN-CONTAINER===================== */}
      <div className=" container-margin">
        <CartContainer key={cart.id} {...cart} />
      </div>
      {/* ================================================ */}
    </>
  );
}

export default Main;
