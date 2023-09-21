import React from 'react'
import { Link } from 'react-router-dom'
import { FiEye } from "react-icons/fi";
import { FiEyeOff} from "react-icons/fi";
import { ACTION } from '../Reducer__/FormReducer';
const LoginPassword = ({state,dispatch}) => {
  const handelOnChange = (e) => {
    dispatch({
      type:ACTION.HANDELONCHANGE,
      payload:{value:e.target.value,name:e.target.name}
    })
  }
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
          <p className="login-heading">Sign in</p>
          <div>
            <p className="Email-heading">Password:</p>
           <div className='relative'> <input
              type={state.passwordVisible ? 'password' : 'Text '}
              className="password-input"
              autoFocus
              name='password'
              placeholder="Enter Your Password"
              value={state.password}
              onChange={handelOnChange}
            />
           {state.passwordVisible ? <FiEyeOff className='eye-icon' onClick={passwordVisible}/> : <FiEye className='eye-icon' name='visible' onClick={passwordVisible}/> }    
            </div>
          </div>
          <button className="countinue-button">Sign in</button>
          <p className="paragraph">
            <a className="link">Forgot Password</a>
          </p>
        </div>
        {/* <div className="create-user-container">
         <div className="center"> <span className="small-line"></span>
          <span className="new">New to Amazon?</span>
          <span className="small-line"></span></div>
          <button className="create-button">Create your Amazon account</button>
        </div> */}
      </div>
    </div>
  )
}

export default LoginPassword