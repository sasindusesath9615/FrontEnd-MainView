import React, { useState } from "react";
import Email from "./inputs/Email";
import FullName from "./inputs/FullName";
import OpenedDays from "./inputs/OpenedDays";
import OpenedTime from "./inputs/OpenedTime";
import Pasword from "./inputs/Password";
import PhoneNumber from "./inputs/PhoneNumber";

function Form() {
  const [deliverer, setDeliverer] = useState([]);
  const [inputDeliverer, setInputDeliverer] = useState({
    FullName: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputDeliverer.FullName && inputDeliverer.Email) {
      const newDeliverer = {
        ...inputDeliverer,
        id: new Date().getTime().toString(),
      };

      setDeliverer([...deliverer, newDeliverer]);

      setInputDeliverer({ FullName: "", Email: "" });

      console.log("deliverer");
      console.log(deliverer);
      console.log("inputDeliverer");
      console.log(inputDeliverer);
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
        <Email
          setInputDeliverer={setInputDeliverer}
          inputDeliverer={inputDeliverer}
        />

        {/* Password */}
        <Pasword />

        {/* Opened days */}
        <OpenedDays />

        {/* Opened Time */}
        <OpenedTime />

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
