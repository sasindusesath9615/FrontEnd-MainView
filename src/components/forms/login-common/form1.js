import React from "react";


function form() {
  return (
    <>
      <div className="container text-center welcome-text">
        <p>welcome to Quik! Please sign in.</p>
      </div>
      <div className="container ">
        <form>
          <div className="mb-3 row align-items-center">
            <label for="InputEmail " className="col-sm-2 col-form-label">
              Email address
            </label>
            <div className="col-sm-10 ">
              <input
                type="email"
                className="form-control "
                //   id="exampleInputEmail1"
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="Please enter your email"
              ></input>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label ">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Please enter your password"
              ></input>
              <div className="mb-3 mt-3">
                <div className="form-text">Forgot your password?</div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-danger" type="button">
                Login
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

export default form;
