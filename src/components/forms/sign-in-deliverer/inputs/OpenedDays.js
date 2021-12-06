import React from 'react'

function OpenedDays() {
    return (
      <>
        <div className="mb-3 row align-items-center py-2">
          <label htmlFor="InputEmail" className="col-sm-2 col-form-label ">
            Opened Days
          </label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              ></input>
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Monday
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              ></input>
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Tuesday
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              ></input>
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Wednesday
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                value="option3"
              ></input>
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Thusday
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                value="option3"
              ></input>
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Friday
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox6"
                value="option3"
              ></input>
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Saturday
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox7"
                value="option3"
              ></input>
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Sunday
              </label>
            </div>
          </div>
        </div>
      </>
    );
}

export default OpenedDays
