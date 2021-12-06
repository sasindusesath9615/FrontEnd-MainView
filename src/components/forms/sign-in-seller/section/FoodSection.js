import React from "react";
import ImageUpload from "../inputs/ImageUpload";
import Agreement from "../inputs/Agreement";

function FoodSection() {
  return (
    <>
      {/* business registration number */}
      <div className="mb-3 row align-items-center py-2">
        <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
          Business Registration Number
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            //   id="exampleInputEmail1"
            id="exampleFormControlInput6"
            aria-describedby="emailHelp"
            placeholder="Enter your business registration number(required)"
          ></input>
        </div>
      </div>
      {/* business registration number */}

      {/* Image Inputs */}
      <ImageUpload />
      
      {/* Agreement */}
      <Agreement />
    </>
  );
}

export default FoodSection;
