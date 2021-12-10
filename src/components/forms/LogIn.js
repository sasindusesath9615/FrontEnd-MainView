import React, { useState } from "react";
import Navbar from "./LogoName";

function Main() {
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

  const handleChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container ">
        <Navbar />
      </div>
      <div className="container container-margin">
        <div className="container text-center py-2 welcome-text">
          <p>welcome to Quik! Please Log In.</p>
        </div>

        <form className="container" onSubmit={handleSubmit}>
          {/* ==================== Email ==================== */}
          <div className="mb-3 row align-items-center py-2">
            <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                //   id="exampleInputEmail1"
                id="exampleFormControlInput3"
                aria-describedby="emailHelp"
                placeholder="Please enter your email"
                name="Email"
                value={inputUser.Email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          {/* ==================== Email ==================== */}

          {/*==================== Password ====================*/}
          <div className="mb-3 row align-items-center py-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Minimum 8 charactors with a number and a letter(required) "
              ></input>
            </div>
          </div>
          {/*==================== Password ====================*/}

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
      </div>
    </>
  );
}

export default Main;
