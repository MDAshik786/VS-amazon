import React from 'react'
import'./SignInButtonDropDown.css'
import { useNavigate } from 'react-router'
const SignInButtonDropDown = () => {
  const navigate = useNavigate();
  const singInButton = () => {
    window.location.href = "/loginemail";
  }
  const newUser = () => {
    window.location.href = "/userlogin";
  }
  return (
    <div className='signIn-container'>
    <div className='button-container'><button className='signIn-button' onClick={singInButton}>Sign in</button></div>
    <div className='name-con'>
            New customer? <span className="color" onClick={newUser}>start here.</span>
          </div>
    </div>
  )
}

export default SignInButtonDropDown