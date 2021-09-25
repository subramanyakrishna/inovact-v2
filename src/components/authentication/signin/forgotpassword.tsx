import React from 'react'

const ForgotPassword =()=>{
return(
    <div className="user-info">
        <div className="user-info__card">
        <div className="forgot-password">
   <div className="forgot-password__header">
       <h6 className="text-style--bold text-size--big sm-small text-align--center">A mail has been sent to your registered mail ID</h6>
       <p className="text-style--bold text-color--green text-size--small sm-small text-align--center">Kindly confirm your identity through the mail to reset your password</p>
   </div>
   <div className="forgot-password__form" >
       <label>New Password </label>
       <input className="input-component" type="password"/>
       <label>Confirm Password </label>
       <input className="input-component" type="password"/>
   </div>
   <button className="button--green">Confirm</button>
        </div>
        </div>
    </div>
)
}
export default ForgotPassword;