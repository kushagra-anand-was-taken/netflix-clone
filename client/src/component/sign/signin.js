import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import { login } from "../../action/auth";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const initialState = { email: "kushrokz95@gmail.com", password: "qwerty1" };
  const [values, setValues] = useState(initialState);
  const { email, password } = values;
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
    dispatch(login(values));
  };
  const signinForm = () => (
    <form className="container mt-5">
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
      <button onClick={(e) => clickSubmit(e)} className="btn btn-primary">
        Submit
      </button>
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
      {signinForm()}
    </>
  );
};

export default Signin;
