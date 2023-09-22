import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { ACTION } from '../Reducer__/FormReducer'
import { FiEye } from "react-icons/fi";
import { FiEyeOff} from "react-icons/fi";
const LoginUser = ({state,dispatch}) => {
   
    const passwordVisible = () => {
        dispatch({
          type:ACTION.VISIBLE
        })
      }
  return (
    <div>
        <Link to={"/"}>
          <div className="amazon-logo-conatiner">
            <img src="images/amazon-logo.png" alt="" width={100} />
            <span className="in">.in</span>
          </div>
        </Link>
      <div className="login-container-outside">

        <div className="login-container">
          <p className="login-heading">Create Account</p>
          <div>
            {" "}
            <p className="input-heading">Your name:</p>
            <input
              type="text"
              className="name-input"
              autoFocus
              name="email"
              placeholder="Please Enter a Email"
            />
            </div>
            <div>
            <p className="input-heading">Mobile number:</p>
            <input type='number' className='input-number'/> 
            </div>
          <div>
            {" "}
            <p className="Email-heading">Email:</p>
            <input
              type="text"
              className="email-input"
              autoFocus
              name="email"
              placeholder="Please Enter a Email"
            />
          </div>
          <div>
            <p className="Email-heading">Password:</p>
           <div className='relative'> <input
              type={state.passwordVisible ? 'password' : 'Text '}
              className="password-input"
              autoFocus
              name='password'
              placeholder="Enter Your Password"
            
            />
            <span className='error'>Passwords must be at least 6 characters.</span>
           {state.passwordVisible ? <FiEyeOff className='eye-icon' onClick={passwordVisible}/> : <FiEye className='eye-icon' name='visible' onClick={passwordVisible}/> }    
            </div>
          </div>
          <button className="countinue-button">Continue</button>
            <p className="bottom-line"></p>
          <p className="paragraph">
          Already have an account?
            <a className="link"> Sign in</a>
          </p>
            <p className="paragraph">By creating an account or logging in, you agree to Amazon’s <a className='link'>Conditions of Use</a> and <a className='link'>Privacy Policy.</a>
            </p>
        </div>
     
      </div>
    </div>
  )
}

export default LoginUser