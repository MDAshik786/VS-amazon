import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div>
        <Link to={'/'}><div  className='amazon-logo-conatiner'><img src="images/amazon-logo.png" alt="" width={200} height={50}/><span className='in'>.in</span></div></Link>
        <div className='login-container-outside'>
        <div className='login-container'>
            <p className='login-heading'>Sign in</p>
            <p className='Email-heading'>Email</p>
            <input type='text' className='email-input' autoFocus value={"email"}/>
        </div>
        </div>
    </div>

  )
}

export default Login