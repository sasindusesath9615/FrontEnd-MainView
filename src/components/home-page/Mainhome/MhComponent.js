import React from "react";
import "./Mhbody.css";
import bell from "../../images/images/bell.png";

function MainhomeComponent2(props) {
  return (
    <React.Fragment>
      <div className="text-center">
        <div className="text-center py-4">
          <button
            className="btn category-button"
            style={{
              borderRadius: "30px",
              backgroundColor: "#F6C06A",
              width: "200px",
              height: "50px",
            }}
          >
            <img
              src={bell}
              alt="bell icon"
              style={{ width: "26px", height: "26px", paddingRight: "1px" }}
            />
            <span> {props.categoryname}</span>
          </button>
        </div>

        <div className="wrapper">
          <img
            className="play"
            src={props.cat1}
            alt="category"
            style={{ top: "5%" }}
          />
          <img
            className="play"
            src={props.cat2}
            alt="category"
            style={{ top: "37%" }}
          />
          <img
            className="play"
            src={props.cat3}
            alt="category"
            style={{ top: "68%" }}
          />
          <img src={props.cat} alt="mainImg" className="mainimage" />
        </div>
      </div>
    </React.Fragment>
  );
}
export { MainhomeComponent2 };
