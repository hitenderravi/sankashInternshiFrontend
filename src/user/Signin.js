import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { signin } from "../auth/helper";
import { App } from "../App.css";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
    role: "",
  });

  const { role, email, password, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onsubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          //calbakc because of nect in authenticate

          setValues({
            ...values,
            role: data.user.role,
            email: "",
            password: "",
            loading: false,
            didRedirect: true,
          });
        }
      })
      .catch((error) => console.log("Signed in error" + error));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (role === "a") {
        return <Redirect to="/home" />;
      }
      if (role === "b") {
        return <Redirect to="/home2" />;
      }
      if (role === "c") {
        return <Redirect to="/home3" />;
      }
    }
  };
  const loadingMessage = () => {
    //instead of success message
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const signinForm = () => {
    return (
      <div className="row cardd">
        <div className="col-md-3"></div>
        <div className="col-md-2 card1 card  "></div>
        <div className="col-md-4 card2 card text-left">
          <form>
            <h1 className="heading">Login</h1>

            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onsubmit} className="btn btn-success btn-block">
              Submit
            </button>
            <p>
              New Here? <Link to="/">Create Acoount</Link>
            </p>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  };

  return (
    <div title="Sign in Page" description="Login here">
      {loadingMessage()}
      {errorMessage()}
      {signinForm()}
      {performRedirect()}
    </div>
  );
};

export default Signin;
