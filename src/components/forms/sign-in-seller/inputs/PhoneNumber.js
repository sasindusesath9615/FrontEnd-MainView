import React from 'react'

function PhoneNumber() {
    return (
      <>
        <div className="mb-3 row align-items-center py-2 ">
          <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
            Phone number
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              //   id="exampleInputEmail1"
              id="exampleFormControlInput2"
              aria-describedby="emailHelp"
              placeholder="Enter your Phone number(required)"
            ></input>
          </div>
        </div>
      </>
    );
}

export default PhoneNumber
