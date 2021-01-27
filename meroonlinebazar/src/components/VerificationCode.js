import React from 'react'
import { Link } from 'react-router-dom';
import "./VerificationCode.css"

function VerificationCode() {
    return (
        <>
                <div className="VerificationCode-main">
                    <h3>Verification</h3>
                      <p>Enter the four digit verification code  we just sent you on your Email Address.</p>
                      <input type = "code" placeholder="Four Digit Code" className = "VerificationCode"></input>
                         <br/>
                         <button type = "submit"> <a> <Link to="/ResetPassword" className="link" >
                         Verify Code
                            </Link> </a>     
                         </button>
                         <br/>
                       
         </div>
               
        </>
    )
}

export default VerificationCode
