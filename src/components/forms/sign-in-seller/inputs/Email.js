import React from "react";

function Email({ setInputSeller, inputSeller }) {
  const handleChange = (e) => {
    setInputSeller({ ...inputSeller, [e.target.name]: e.target.value });
  };

  return (
    <>
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
            value={inputSeller.Email}
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </>
  );
}

export default Email;
