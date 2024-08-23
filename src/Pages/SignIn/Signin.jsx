import React, { useState } from "react";
import "./Signin.css";
import { Link, Outlet } from "react-router-dom";

function Signin() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrValues, setformErrValues] = useState({});

  console.log(formErrValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setformErrValues(errors);
  };
  

  const validate = (values) => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const errors = {};

    if (!emailRegExp.test(values.email)) {
      errors.email = "Invalid Format";
    }
    if (!passRegExp.test(values.password)) {
      errors.password = "Choose a Strong Password";
    }
    return errors;
  };

  return (
    <div className="allsignindiv">
      <div className="heading">
        <div className="signinhead">
          <h1>IMDb</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="">
        <h1 className="signinhead">Sign-in</h1>
        <div className="maildiv">
          <label htmlFor="email">Email:</label>
          <input
          required
            name="email"
            type="text"
            id="email"
            placeholder="Enter your mail"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrValues.email && <p>{formErrValues.email}</p>}
        </div>
        <div className="passdiv">
          <label htmlFor="pass">Password: </label>
          <input
          required
            name="password"
            type="password"
            id="pass"
            placeholder="Enter a password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrValues.password && <p>{formErrValues.password}</p>}
        </div>

        <Link to={"/frgtpassemail"}>Forget Password?</Link>
        <div className="buttonContainer">
          <button className="signBtn" align="center">
            SignIn
          </button>
        </div>
      </form>
      <div className="newaccdiv">
        <Link to={"/signup"}>Create new Account? </Link>
        <div></div>
      </div>
    </div>
  );
}

export default Signin;
