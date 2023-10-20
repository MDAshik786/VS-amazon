import React from 'react'
import'./SignInButtonDropDown.css'
import { useNavigate } from 'react-router'
import { handleNavigate } from '../Function/ComponentFunctions/NavigateFunction';
const SignInButtonDropDown = () => {
  const navigate = useNavigate();
 
  return (
    <div className='signIn-container'>
    <div className='button-container'><button className='signIn-button' onClick={(e) => handleNavigate(navigate, "loginemail",e )}>Sign in</button></div>
    <div className='name-con'>
            New customer? <span className="color"onClick={(e) => handleNavigate(navigate, "userlogin",e )}>start here.</span>
          </div>
    </div>
  )
}

export default SignInButtonDropDown