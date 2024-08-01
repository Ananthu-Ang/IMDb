import React, { useState } from "react";
import "../Pages/Signin.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
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
  const goToSignUp = () => {
    navigate('/signup');
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
    <div>
      <div className="heading">
        <div className="signinhead">
          <h1>IMDb</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="alldiv">
        <h1 className="signinhead">Sign-in</h1>
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

        <a href="">Forget Password?</a>
        <div className="buttonContainer">
          <button className="signBtn" align="center">
            SignIn
          </button>
        </div>
      </form>
      <div className="newaccdiv">
        {/* <button onClick={got} className="newaccbtn">Craete new Account</button> */}
        
        <Link to={"/signup"}>Create new Account? </Link>
<div></div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Signin;
