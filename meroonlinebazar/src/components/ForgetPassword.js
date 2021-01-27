import React from 'react'
import "./ForgetPassword.css"
import { Link } from 'react-router-dom';

function ForgetPassword() {
    return (
        <>
                <div className="forgetpassword-main">
                    <h3>Forgot Password?</h3>
                      <p>It's Okay! Enter the Email Address associated with your account.</p>
                      <input type = "text" placeholder="Email Address" className = "EmailAddress"></input>
                         <br/>
                         <button type = "submit"><a> <Link to="/VerificationCode" className="link" >
                            Continue
                            </Link> </a>     
 
                         </button>
                </div>
               
        </>
    )
}

export default ForgetPassword
