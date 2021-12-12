import React, { useState } from "react";
import LogoName from "./LogoName";
import styled from "styled-components";

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

  // ===================================================================
  return (
    <>
      <div className="container ">
        <LogoName />
      </div>
      <StyledContainer className="container">
        <StyledWelcomeText className="container text-center py-2">
          <p>welcome to Quik! Please Log In.</p>
        </StyledWelcomeText>

        <form
          className="container needs-validation"
          onSubmit={handleSubmit}
          novalidate
        >
          {/* ==================== Email ==================== */}
          <div className="mb-3 row align-items-center py-2">
            <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
              Email
            </label>
            <div className="col-sm-10">
              <StyledInput
                type="email"
                className="form-control"
                //   id="exampleInputEmail1"
                id="exampleFormControlInput3"
                aria-describedby="emailHelp"
                placeholder="Please enter your email"
                name="Email"
                value={inputUser.Email}
                onChange={handleChange}
              ></StyledInput>
              {/* <div class="valid-tooltip">Looks good!</div> */}
            </div>
          </div>
          {/* ==================== Email ==================== */}

          {/*==================== Password ====================*/}
          <div className="mb-3 row align-items-center py-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">
              Password
            </label>
            <div className="col-sm-10">
              <StyledInput
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Minimum 8 charactors with a number and a letter(required) "
              ></StyledInput>
              {/* <div class="valid-tooltip">Looks good!</div>
              <div class="invalid-tooltip">Please enter someething!</div> */}
            </div>
          </div>
          {/*==================== Password ====================*/}

          <div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <StyledButton className="btn btn-danger" type="submit">
                Sign up
              </StyledButton>
              <StyledButton1 className="btn btn-outline-danger" type="button">
                New Member? <b>Register</b> here.
              </StyledButton1>
            </div>
          </div>
        </form>
      </StyledContainer>
    </>
  );
}
export default Main;

// ======================Styled Components============================
const StyledContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledWelcomeText = styled.div`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: #f4633b;
  &:hover {
    background-color: #f4633b;
  }
`;
const StyledButton1 = styled.button`
  background-color: white;
  color: #f4633b;
  &:hover {
    background-color: #f4633b;
  }
`;

const StyledInput = styled.input`
  border-color: #f4633b;
`;
