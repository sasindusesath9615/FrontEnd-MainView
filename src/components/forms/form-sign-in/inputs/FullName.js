import React from 'react'

function FullName() {
    return (
      <>
        <div className="mb-3 row align-items-center py-2">
          <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
            Full Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              //   id="exampleInputEmail1"
              id="exampleFormControlInput1"
              aria-describedby="emailHelp"
              placeholder="Enter your first name and last name(required)"
            ></input>
          </div>
        </div>
      </>
    );
}

export default FullName
