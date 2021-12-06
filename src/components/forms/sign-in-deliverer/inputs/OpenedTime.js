import React from 'react'

function OpenedTime() {
    return (
      <>
        <div className="mb-3 row align-items-center py-2">
          <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
            Opened Time
          </label>
          <div className="col-sm-10">
            <input
              type="time"
              className="form-control"
              //   id="exampleInputEmail1"
              id="exampleFormControlInput5"
              aria-describedby="emailHelp"
              placeholder="Enter your shop name(required)"
            ></input>
          </div>
        </div>
      </>
    );
}

export default OpenedTime
