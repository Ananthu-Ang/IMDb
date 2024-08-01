import React from "react";
import { useState } from "react";
import "../Pages/SignUp.css"
import Signin from "./Signin";

function SignUp() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
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
    const nameRegExp = /^[A-Za-z\s]+$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const errors = {};
    if (!nameRegExp.test(values.name)) {
      errors.name = "Invalid Username";
    }

    if (!emailRegExp.test(values.email)) {
      errors.email = "Invalid Format";
    }
    if (!passRegExp.test(values.password)) {
      errors.password = "Choose a Strong Password";
    }
    if(formValues.password!==formValues.cnfpassword)
        return"password doesnt match"
    return errors;
  };
  return (
    <div>
      <div className="heading">
        <div className="signinhead">
          <h1>IMDb</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="alldiv">
        <h1 className="signuphead">Sign-up</h1>
        <div className="namediv">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrValues.email && <p>{formErrValues.email}</p>}
        </div>
        <div className="maildiv">
          <label htmlFor="email">Email:</label>
          <input
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
            name="password"
            type="password"
            id="pass"
            placeholder="Enter a password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrValues.password && <p>{formErrValues.password}</p>}
        </div>
        <div className="cnfpassdiv">
          <label htmlFor="pass">Confirm Password: </label>
          <input
            name="cnfpassword"
            type="password"
            id="pass"
            placeholder="Re-enter the Password"
            value={formValues.cnfpassword}
            onChange={handleChange}
          />
          {formErrValues.cnfpassword && <p>{formErrValues.cnfpassword}</p>}
        </div>
        <div className="buttonContainer">
          <button className="signBtn" align="center">
            Create Account
          </button>
        </div>
      </form>
      <div className="alrdyacc">
        {/* <button onClick={S} className="alrdyaccbtn">Already have Account? Sign In</button> */}
        <a className="alrdyaccbtn" href="reactminiproject\src\Pages\Signin.jsx">Already have Account? Sign In</a>
      </div>
    </div>
  );
}

export default SignUp;
