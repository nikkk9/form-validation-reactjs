import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

// you can also use 'validator' npm package

const Login1 = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [inputErr, setInputErr] = useState({});
  const [showAlert, setshowAlert] = useState(false);

  const validate = () => {
    const errors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(email)) {
      errors.email = "Enter valid email format!";
    }

    if (!mobile) {
      errors.mobile = "Mobile is required!";
    } else if (mobile.length < 10) {
      errors.mobile = "Mobile no. is required 10 digit";
    }

    if (!password) {
      errors.password = "Password is required!";
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  const submitHandle = (e) => {
    e.preventDefault();

    setInputErr(validate());

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{inputErr.email}</p>
          <input
            type="number"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <p>{inputErr.mobile}</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default Login1;
