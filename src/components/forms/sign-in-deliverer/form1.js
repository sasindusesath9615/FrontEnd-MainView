import React from "react";

function form() {
  return (
    <>
      <div className="container text-center py-2 welcome-text">
        <p>welcome to Quik! Please sign in.</p>
      </div>
      <div className="container ">
        <form>
          <div className="mb-3 row align-items-center py-2">
            <label for="InputEmail" className="col-sm-2 col-form-label ">
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
          <div className="mb-3 row align-items-center py-2 ">
            <label for="InputEmail" className="col-sm-2 col-form-label ">
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
          <div className="mb-3 row align-items-center py-2">
            <label for="InputEmail" className="col-sm-2 col-form-label ">
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
              ></input>
            </div>
          </div>
          <div className="mb-3 row align-items-center py-2">
            <label for="inputPassword" className="col-sm-2 col-form-label ">
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
          <hr />
          {/* shop name */}
          <div className="mb-3 row align-items-center py-2">
            <label for="InputEmail" className="col-sm-2 col-form-label ">
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
              ></input>
            </div>
          </div>
          {/* shop name */}
          {/* Opened days */}
          <div className="mb-3 row align-items-center py-2">
            <label for="InputEmail" className="col-sm-2 col-form-label ">
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
                <label className="form-check-label" for="inlineCheckbox1">
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
                <label className="form-check-label" for="inlineCheckbox2">
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
                <label className="form-check-label" for="inlineCheckbox3">
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
                <label className="form-check-label" for="inlineCheckbox3">
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
                <label className="form-check-label" for="inlineCheckbox3">
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
                <label className="form-check-label" for="inlineCheckbox3">
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
                <label className="form-check-label" for="inlineCheckbox3">
                  Sunday
                </label>
              </div>
            </div>
          </div>
          {/* Opened days */}

          {/* Opened Time */}
          <div className="mb-3 row align-items-center py-2">
            <label for="InputEmail" className="col-sm-2 col-form-label ">
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
          {/* Opened Time */}

          {/* business registration number */}
          <div className="mb-3 row align-items-center py-2">
            <label for="InputEmail" className="col-sm-2 col-form-label ">
              Business Registration Number
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                //   id="exampleInputEmail1"
                id="exampleFormControlInput6"
                aria-describedby="emailHelp"
                placeholder="Enter your business registration number(required)"
              ></input>
            </div>
          </div>
          {/* business registration number */}

          {/* Image Inputs */}
          <div className="row py-2">
            <div className="col">
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Upload Shop's Image :
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile1"
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Business Registration (jpg/PDF)
                </label>
                <input
                  className="form-control "
                  type="file"
                  id="formFile2"
                ></input>
              </div>
            </div>
          </div>
          {/* Image Inputs */}

          {/*  */}
          <div className="container py-2 border agreement-statement">
            <div className="overflow-auto">
              <p className=" p-2" style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisici ng elit. Quia,
                dicta illum repellat assumenda sunt rem omnis quod voluptates
                nisi animi nam accusam us error laboriosam, alias qui suscipit
                aut nemo corrupti? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non dolores ab, sequi ea, nulla qui, quia
                nostrum dolorem illum quidem laborum! Culpa molestias corporis
                consequa tur saepe quae tempora cumque consectetur eveniet
                doloribus illum, dolore na tus veniam omnis doloremque. Dolor
                laboriosam nemo nam, deleniti recusandae i mpedit aliquid
                voluptas perspiciatis, natus pariatur provident! Exercitatione m
                dolorem eaque quasi dicta consequuntur
              </p>
            </div>
            <div className="row d-flex flex-row-reverse">
              <div className="col-lg-1 col-xl-1 col-sm-3 col-md-2 col-3 text-end">
                <button type="button " className="btn btn-secondary btn-sm">
                  Agreed
                </button>
              </div>
              <div className="col-lg-1 col-xl-1 col-sm-9 col-md-2 col-6 text-end">
                <button type="button " className="btn btn-secondary btn-sm">
                  Decline
                </button>
              </div>
            </div>
          </div>
          {/*  */}

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

export default form;
