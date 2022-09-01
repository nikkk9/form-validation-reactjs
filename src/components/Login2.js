import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

const Login2 = () => {
  const initialValues = { email: "", mobile: "", password: "" };
  const [inputVal, setInputVal] = useState(initialValues);
  const [inputErr, setInputErr] = useState({});
  const [showAlert, setshowAlert] = useState(false);

  const changeHandle = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    // object destructuring
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
    // console.log(inputVal);
  };

  const validate = (val) => {
    const errors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!val.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(val.email)) {
      errors.email = "Enter valid email format!";
    }

    if (!val.mobile) {
      errors.mobile = "Mobile is required!";
    } else if (val.mobile.length < 10) {
      errors.mobile = "Mobile no. is required 10 digit";
    }

    if (!val.password) {
      errors.password = "Password is required!";
    } else if (val.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  const submitHandle = (e) => {
    e.preventDefault();

    setInputErr(validate(inputVal));

    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 3000);

    // setInputVal(initialValues);
  };

  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <h1>LOGIN FORM</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputVal.email}
            onChange={changeHandle}
          />
          <p>{inputErr.email}</p>
          <input
            type="number"
            placeholder="Mobile"
            name="mobile"
            value={inputVal.mobile}
            onChange={changeHandle}
          />
          <p>{inputErr.mobile}</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputVal.password}
            onChange={changeHandle}
          />
          <p>{inputErr.password}</p>

          <button type="submit" onClick={submitHandle}>
            LOGIN
          </button>
          {Object.keys(inputErr).length === 0 && showAlert && (
            <span>You have successfully logged in !</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login2;
