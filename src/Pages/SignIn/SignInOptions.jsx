import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import './SignInOption.css'

function SignInOptions() {
  return (
    <div className='totaldiv'>
      <h1>SignIn Options</h1>
      
      <div className='googlediv'>
        <button className='Googlebtn'> Continue with Google</button>
        <div className='googleicon'>
          <FaGoogle />
        </div>
      </div>
      <div className='fbdiv'>
        <button className='FBbtn'> Continue with Facebook</button>
        <div className='Fbicon'>
          <FaFacebook />
        </div>
      </div>
      <div className='applediv'>
        <button className='Applebtn'> Continue with Apple</button>
        <div>
          <FaApple />
        </div>
      </div>
    </div>
  )
}

export default SignInOptions
