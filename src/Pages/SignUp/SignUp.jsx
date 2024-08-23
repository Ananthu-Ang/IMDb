import React from "react";
import { useState } from "react";
import '../SignUp/SignUp.css'
import Signin from "../SignIn/Signin";
import { Link } from "react-router-dom";

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
        errors.cnfpassword ="Passwords doesn't match"
    return errors;
  };
  return (
    <div>
      <div className="heading">
        <div className="signinhead ">
          <h1>IMDb</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="alliv">
        <h1 className="signuphead">Sign-up</h1>
        <div className="namediv">
          <label htmlFor="name">Name:</label>
          <input
          required
            name="name"
            type="text"
            id="name"
            placeholder="Enter your Name"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrValues.email && <p>{formErrValues.email}</p>}
        </div>
        <div className="maildiv">
          <label htmlFor="email">Email:</label>
          <input
          required
            name="email"
            type="text"
            id="email"
            placeholder="Enter your Mail"
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
            placeholder="Enter a Password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrValues.password && <p>{formErrValues.password}</p>}
        </div>
        <div className="cnfpassdiv">
          <label htmlFor="pass">Confirm Password: </label>
          <input
          required
            name="cnfpassword"
            type="password"
            id="pass"
            placeholder="Re-type the Password"
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
      <Link to={"/signin"}>Already have Account? </Link>
      </div>
    </div>
  );
}

export default SignUp;
