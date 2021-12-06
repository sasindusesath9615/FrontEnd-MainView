import React from "react";

function ShopType({ setFood, setGrocery, setHealthcare }) {
  const SetCategory = (category) => {
    if (category === "food") {
      setFood(true);
      setGrocery(false);
      setHealthcare(false);
    } else if (category === "grocery") {
      setGrocery(true);
      setFood(false);
      setHealthcare(false);
    } else {
      setHealthcare(true);
      setGrocery(false);
      setFood(false);
    }
  };

  return (
    <>
      <div className="mb-3 row align-items-center py-2">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">
          Shop Type
        </label>
        <div className="col-sm-10">
          {/* food */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onClick={() => SetCategory("food")}
            ></input>

            <label className="form-check-label" htmlFor="inlineRadio1">
              Food
            </label>
          </div>
          {/* grocery */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              onClick={() => SetCategory("grocery")}
            ></input>
            <label className="form-check-label" htmlFor="inlineRadio2">
              Grocery
            </label>
          </div>
          {/* farmacy */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
              onClick={() => SetCategory("healthcare")}
            ></input>
            <label className="form-check-label" htmlFor="inlineRadio3">
              Farmacy
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopType;
