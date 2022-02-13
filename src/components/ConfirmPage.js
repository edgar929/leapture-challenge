import React from "react";

const ConfirmPage = ({ values, prevStep, submit}) => {
   
    return(
        //confirm page display all values
        <div className="form-container">
        <h1 className="mb-5">Account Setup</h1>
        <div className="form-group">
            <p>First Name: {values.firstName}</p>
            <p>Last Name: {values.lastName}</p>
            <p>Age: {values.age}</p>
            <p>Email: {values.email}</p>
            <p>Phone Number: {values.phoneNumber}</p>
            <p>Password: {values.password}</p>
            <p>Confirm Password: {values.confirmPassword}</p>
         </div>
            <br />
            <div className="flex flex-row justify-content-between">
            <div className="text-left">
                <button className="btn btn-primary" onClick={()=>prevStep()}>Back</button>
                </div>
                <div className="text-right">
                <button className="btn btn-primary" onClick={()=>submit()}>Submit</button>
                </div>
         </div>
        </div>
    )
}
export default ConfirmPage;
