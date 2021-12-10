import React,{useState} from "react";
import Navbar from "../LogoName";

function Main() {

  const [deliverer, setDeliverer] = useState([]);
  const [inputDeliverer, setInputDeliverer] = useState({
    FullName: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputDeliverer.FullName && inputDeliverer.Email) {
      const newDeliverer = {
        ...inputDeliverer,
        id: new Date().getTime().toString(),
      };

      setDeliverer([...deliverer, newDeliverer]);

      setInputDeliverer({ FullName: "", Email: "" });

      console.log("deliverer");
      console.log(deliverer);
      console.log("inputDeliverer");
      console.log(inputDeliverer);
    } else {
      console.log("empty values");
    }
  };

  const handleChange = (e) => {
    setInputDeliverer({ ...inputDeliverer, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container ">
        <Navbar />
      </div>
      <div className="container container-margin">
        <div className="container text-center py-2 welcome-text">
          <p>welcome to Quik! Please sign in.</p>
        </div>

        <form className="container" onSubmit={handleSubmit}>
          {/*=================== FullName =================== */}
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

          {/* =================== Phone Number===================  */}
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

          {/*===================  Email =================== */}
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
                value={inputDeliverer.Email}
                onChange={handleChange}
              ></input>
            </div>
          </div>

          {/* =================== Password===================  */}
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

          {/* =================== Opened days =================== */}
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

          {/* =================== Opened Time =================== */}
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

          <div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <button className="btn btn-danger" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Main;
