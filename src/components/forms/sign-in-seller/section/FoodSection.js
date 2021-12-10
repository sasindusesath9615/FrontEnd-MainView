import React from "react";
import ImageUpload from "../inputs/ImageUpload";
import Agreement from "../inputs/Agreement";

function FoodSection() {
  return (
    <>
      {/* Image Inputs */}
      <ImageUpload />

      {/* Agreement */}
      <Agreement />
    </>
  );
}

export default FoodSection;
