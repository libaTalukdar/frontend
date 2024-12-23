import React,{useState} from 'react'
import './LogInPopUp.css'
import { assets } from './../../assets/assets';

const LogInPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Log In")
  return (
    <div className='login-popup'>
     <form className="login-popup-container">
        <div className="login-popup-title">
        <h2>{currentState}</h2>
       <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

        </div>
        <div className="login-popup-input">
          {currentState==="Log In"?<></>:<input type="text" placeholder='your name'required />}
          <input type="email" placeholder='your email'required />
          <input type="password" placeholder='password'required />
        </div>
        <button>{currentState==="sign up"?"create account":"Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox"required />
          <p>By continuing, I agree to the terms & policy.</p>
        </div>
        {currentState==="Log In"?<p>Create a new account?< span onClick={()=>setCurrentState("sign up")}>Click here</span  ></p>:<p>Already have an account? <span onClick={()=>setCurrentState("Log In")}>Login here</span></p>}


     </form>
    </div>
  )
}

export default LogInPopUp
