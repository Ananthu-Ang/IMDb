import React from 'react'

function ForgetPass2() {
  const handleSubmit =()=>{
    
  }
  return (
    <div>
       <div className="heading">
        <div className="signinhead">
          <h1> IMDb </h1>
        </div>
      </div>
      <form>
      <h1> Reset your Password </h1>
        <div className="newpassdiv">
          <label htmlFor="newpasswrd">New Password:</label>
          <input
          required 
            name="newpass"
            type="text"
            id="email"
            placeholder="Enter new password"
          />
        </div>
        <div className="cnfnewpassdiv">
          <label htmlFor="cnfnewpasswrd">Re-type Password:</label>
          <input
          required
            name="cnfpass"
            type="text"
            id="cnfpass"
            placeholder="Confirm Password"
          />
        </div>
        <div className="buttonContainer">
          <button  className="signBtn" align="center">
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ForgetPass2
