import React from "react";
import "./Mhbody.css";
// import Carousel from "react-grid-carousel";

// import { MainhomeComponent2 } from "./MhComponent";

// import food from "../../images/images/food.png";
// import food1 from "../../images/images/food1.png";
// import food2 from "../../images/images/food2.png";
// import food3 from "../../images/images/food3.png";
// import grocery from "../../images/images/grocery.png";
// import grocery1 from "../../images/images/grocery1.png";
// import grocery2 from "../../images/images/grocery2.png";
// import grocery3 from "../../images/images/grocery3.png";
// import medicine from "../../images/images/medicine.png";
// import medicine1 from "../../images/images/medicine1.png";
// import medicine2 from "../../images/images/medicine2.png";
// import medicine3 from "../../images/images/medicine3.png";

function CategorySection() {
  return (
    <>
      <div className="row py-5">
        {/* <Carousel
          cols={3}
          rows={1}
          gap={10}
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 3,
            },
            {
              breakpoint: 990,
              cols: 3,
            },
            {
              breakpoint: 768,
              cols: 1,
            },
          ]}
          mobileBreakpoint={500}
        >
          <Carousel.Item>
            <MainhomeComponent2
              cat={food}
              cat1={food1}
              cat2={food2}
              cat3={food3}
              categoryname="Food"
            />
          </Carousel.Item>
          <Carousel.Item>
            <MainhomeComponent2
              cat={grocery}
              cat1={grocery1}
              cat2={grocery2}
              cat3={grocery3}
              categoryname="Grocery"
            />
          </Carousel.Item>
          <Carousel.Item>
            <MainhomeComponent2
              cat={medicine}
              cat1={medicine1}
              cat2={medicine2}
              cat3={medicine3}
              categoryname="HealthCare"
            />
          </Carousel.Item>
        </Carousel> */}
      </div>
    </>
  );
}

export default CategorySection;
