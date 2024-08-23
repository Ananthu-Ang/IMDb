import React from "react";
import '../Forget/Forget.css'
import { useNavigate } from "react-router-dom";
import { Link  } from "react-router-dom";

function ForgetPass1() {
  const navigate = useNavigate()
  const handleForm = ()=>{

    navigate('/forgetchanging')

  }
  return (
    <div>
         <div className="frgtpassheading">
        <div className="frgtpasshead">
          <h1>IMDb</h1>
        </div>
      </div>
      <form onSubmit={handleForm} className="allform">
        <h1> Reset your password </h1>
        <p className="pclss">Enter the e-mail associated with imdb account</p>
        <div className="maildivv">
          <label htmlFor="email">Email:</label>
          <input
          required
            name="email"
            type="email"
            id="email"
            placeholder="Enter your mail"
          />
        </div>
        <div className="continuebtndiv">
<button className="continuebtn" >Continue</button>        </div>
      </form>
    </div>
  );
}

export default ForgetPass1;
