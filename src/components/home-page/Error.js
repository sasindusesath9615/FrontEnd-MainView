import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="text-center pt-3">
        <h2>Oops...</h2>
        <h5>Looks like you're on the wrong path!!</h5>
        <Link className="btn" to="/">Back Home</Link>
      </div>
    </>
  );
}

export default Error;
