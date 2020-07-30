import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper.js";
import { Dropdown, DropdownButton, Item } from "react";

import { App } from "../App.css";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
    role: "",
  });

  const { role, email, password, error, success } = values; //destructure

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ role, email, password }) //this signup is from auth/helper
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            role: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("error in signup"));
  };

  const signupForm = () => {
    return (
      <div className="row cardd">
        <div className="col-md-3"></div>
        <div className="col-md-2 card1 card  "></div>
        <div className="col-md-4 card2 card text-left">
          <form>
            <h1 className="heading">SignUp</h1>

            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                value={email}
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                value={password}
                type="password"
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Role</label>
              <br />
              <select value={role} onChange={handleChange("role")}>
                <option selected value="a">
                  A
                </option>
                <option value="b">B</option>
                <option value="c">C</option>
              </select>
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
            <p>
              Already have an Account? <Link to="/signin">Login Here</Link>
            </p>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New Account is created succesfully. Please{" "}
            <Link to="/signin">Login here</Link>
          </div>
        </div>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div title="Sign up Page" description="Register here">
      {successMessage()}
      {errorMessage()}
      {signupForm()}
    </div>
  );
};

export default Signup;
