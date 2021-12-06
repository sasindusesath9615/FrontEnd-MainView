import React from 'react'

function Password() {
    return (
      <>
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
      </>
    );
}

export default Password
