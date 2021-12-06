import React from "react";

// Section components Import
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import OrderNowSection from "./OrderNowSection";
import DelivererSection from "./DelivererSection";
import SellerSection from "./SellerSection";
import Footer from "../Footer/Footer";
// css
import "./Mhbody.css";

function Homebody() {
  return (
    <>
      {/*Hero Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            " linear-gradient(180deg, #F6C06A 0%, rgba(254, 141, 110, 0) 100%)",
        }}
      >
        <div className="container">
          {/* <div className="row row-style"></div> */}
          <HeroSection />
        </div>
      </div>
      {/*Hero section End */}

      {/**Starting Second Row */}
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="container">
          <CategorySection />
        </div>
      </div>
      {/**Ending second Row */}

      {/**Starting third Row */}
      <div className="container-fluid" style={{ backgroundColor: "#F8F7E9" }}>
        <div className="container">
          <OrderNowSection/>
        </div>
      </div>
      {/**Ending of the third row */}

      {/**Starting forth Row */}
      <div className="container-fluid" style={{ backgroundColor: "#FE432E" }}>
        <div className="container">
          <DelivererSection />
        </div>
      </div>
      {/**Ending of the forth row */}

      {/**Starting fifth Row */}
      <div className="container-fluid" style={{ backgroundColor: "#F8F7E9" }}>
        <div className="container">
          <SellerSection />
        </div>
      </div>
      {/**Ending fifth Row */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
}
export default Homebody;
