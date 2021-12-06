import React, { useState } from "react";
// import { sellerData } from "../../../sellerData";

import Email from "./inputs/Email";
import FullName from "./inputs/FullName";
import Pasword from "./inputs/Password";
import PhoneNumber from "./inputs/PhoneNumber";

function Form() {
  const [user, setUser] = useState([]);
  const [inputUser, setInputUser] = useState({
    FullName: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputUser.FullName && inputUser.Email) {
      const newUser = { ...inputUser, id: new Date().getTime().toString() };

      setUser([...user, newUser]);
      setInputUser({ FullName: "", Email: "" });

      console.log("user");
      console.log(user);
      console.log("inputUser");
      console.log(inputUser);
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
        <Email setInputUser={setInputUser} inputUser={inputUser} />

        {/* Password */}
        <Pasword />

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
