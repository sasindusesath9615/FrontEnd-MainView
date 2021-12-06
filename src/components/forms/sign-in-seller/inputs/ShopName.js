import React from "react";

function ShopName({ setInputSeller, inputSeller }) {
  const handleChange = (e) => {
    setInputSeller({ ...inputSeller, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mb-3 row align-items-center py-2">
        <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
          Shop Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            //   id="exampleInputEmail1"
            id="exampleFormControlInput4"
            aria-describedby="emailHelp"
            placeholder="Enter your shop name(required)"
            name="ShopName"
            value={inputSeller.ShopName}
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ShopName;
