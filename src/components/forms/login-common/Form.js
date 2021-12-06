import React, { useState } from "react";
import Email from "./inputs/Email";
import Pasword from "./inputs/Password";

function Form() {
  const [user, setUser] = useState([]);
  const [inputUser, setInputUser] = useState({
    Password: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputUser.Password && inputUser.Email) {
      const newUser = { ...inputUser, id: new Date().getTime().toString() };

      setUser([...user, newUser]);
      setInputUser({ Password: "", Email: "" });

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
        {/* Email */}
        <Email setInputUser={setInputUser} inputUser={inputUser} />

        {/* Password */}
        <Pasword />

        <div>
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
            <button className="btn btn-danger" type="submit">
              Sign up
            </button>
            <button className="btn btn-outline-danger" type="button">
              New Member? <b>Register</b> here.
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
