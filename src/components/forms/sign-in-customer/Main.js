import React, { useState } from "react";
import styled from "styled-components";
import LogoName from "../LogoName";

function Customer() {
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

  const handleChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };
  // ==================================================================
  return (
    <>
      <div className="container ">
        <LogoName />
      </div>
      <StyledContainer className="container">
        <StyledWelcomeText className="container text-center py-2">
          <p>welcome to Quik! Please sign in.</p>
        </StyledWelcomeText>
        <form className="container" onSubmit={handleSubmit}>
          {/*=================== FullName ===================*/}
          <div className="mb-3 row align-items-center py-2">
            <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
              Full Name
            </label>
            <div className="col-sm-10">
              <StyledInput
                type="text"
                className="form-control"
                //   id="exampleInputEmail1"
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="Enter your first name and last name(required)"
              ></StyledInput>
            </div>
          </div>

          {/*=================== Phone Number=================== */}
          <div className="mb-3 row align-items-center py-2 ">
            <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
              Phone number
            </label>
            <div className="col-sm-10">
              <StyledInput
                type="number"
                className="form-control"
                //   id="exampleInputEmail1"
                id="exampleFormControlInput2"
                aria-describedby="emailHelp"
                placeholder="Enter your Phone number(required)"
              ></StyledInput>
            </div>
          </div>

          {/* ===================Email ===================*/}
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
            </div>
          </div>

          {/*=================== Password ===================*/}
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
            </div>
          </div>

          <div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <StyledButton className="btn btn-danger" type="submit">
                Sign up
              </StyledButton>
            </div>
          </div>
        </form>
      </StyledContainer>
    </>
  );
}
export default Customer;

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

const StyledInput = styled.input`
  border-color: #f4633b;
`;
