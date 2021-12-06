import React, { useState } from "react";
import { sellerData } from "../../../sellerData";

import FoodSection from "./section/FoodSection";
import GrocerySection from "./section/GrocerySection";
import HealthcareSection from "./section/HealthcareSection";

import Email from "./inputs/Email";
import FullName from "./inputs/FullName";
import OpenedDays from "./inputs/OpenedDays";
import OpenedTime from "./inputs/OpenedTime";
import Pasword from "./inputs/Password";
import PhoneNumber from "./inputs/PhoneNumber";
import ShopName from "./inputs/ShopName";
import ShopType from "./inputs/ShopType";

function Form() {
  const [food, setFood] = useState(false);
  const [grocery, setGrocery] = useState(false);
  const [healthcare, setHealthcare] = useState(false);

  const [seller, setSeller] = useState(sellerData);
  const [inputSeller, setInputSeller] = useState({
    ShopName: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputSeller.ShopName && inputSeller.Email) {
      const newSeller = { ...inputSeller, id: new Date().getTime().toString() };

      setSeller([...seller, newSeller]);

      setInputSeller({ ShopName: "", Email: "" });

      console.log("seller");
      console.log(seller);
      console.log("inputSeller");
      console.log(inputSeller);
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <div className="container text-center py-2 welcome-text">
        <p>welcome to Quik! Please sign in.</p>
      </div>

      <form className="container" onSubmit={handleSubmit}>
        {/* FullName */}
        <FullName />

        {/* Phone Number */}
        <PhoneNumber />

        {/* Email */}
        <Email setInputSeller={setInputSeller} inputSeller={inputSeller} />

        {/* Password */}
        <Pasword />

        {/* shop name */}
        <ShopName setInputSeller={setInputSeller} inputSeller={inputSeller} />

        {/* Opened days */}
        <OpenedDays />

        {/* Opened Time */}
        <OpenedTime />

        {/* shop type */}
        <ShopType
          setFood={setFood}
          setGrocery={setGrocery}
          setHealthcare={setHealthcare}
        />

        <hr />

        {food && <FoodSection />}
        {grocery && <GrocerySection />}
        {healthcare && <HealthcareSection />}

        {/*  */}
        <div>
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
            <button className="btn btn-danger" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
