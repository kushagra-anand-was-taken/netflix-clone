import React, { useState } from "react";

import { Redirect, Link } from "react-router-dom";
import { register } from "../../action/auth";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const initialState = { name: "", email: "", password: "" };
  const [values, setValues] = useState(initialState);
  const { name, email, password } = values;
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading } = auth;
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alert);

  const handleChange = (data) => (e) => {
    setValues({ ...values, [data]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    dispatch(register(values));
  };
  const signUpForm = () => (
    <form className="container mt-5">
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={(e) => clickSubmit(e)} className="btn btn-secondary ">
        Sign Up
      </button>

      <Link to="/signin">
        <button className="btn btn-primary ml-5">Sign In</button>
      </Link>
    </form>
  );

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {alerts &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            {alert.msg}
          </div>
        ))}
      {signUpForm()}
    </>
  );
};

export default Signup;
