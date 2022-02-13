import React,{useState} from "react";

const SecondStep = ({ values, inputChange, nextStep, prevStep }) => {
    const [error, setError] = useState({});

    const validate=(values)=>{
        let errors = {}
    
        if (!values.email) 
            errors.email = 'Enter valid Email';
        if (!values.password) 
            errors.password = 'Password is required';
        if (!values.confirmPassword)
            errors.confirmPassword = 'Confirm Password is required';
        if (values.password !== values.confirmPassword)
            errors.confirmPassword = 'Password and Confirm Password must match';
        if (!values.phoneNumber) 
            errors.phoneNumber = 'phone number is required';
          
          return errors;
        }
    const next = () => {
         const errors = validate(values);
         setError(errors);

            if(Object.keys(errors).length === 0)
                  nextStep();
    };
    const back = (e) => {
        prevStep();
    };

    
    return (
        <div className="form-container">
        <h1 className="mb-5">Account Setup</h1>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            className="form-control"
            name="email"
            value={values.email}
            onChange={inputChange("email")}
            />
            {error.email && <p className="text-danger">{error.email}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
            type="number"
            className="form-control"
            name="PhoneNumber"
            value={values.phoneNumber}
            onChange={inputChange("phoneNumber")}
            />
            {error.phoneNumber && <p className="text-danger">{error.phoneNumber}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            className="form-control"
            name="password"
            value={values.password}
            onChange={inputChange("password")}
            />
            {error.password && <p className="text-danger">{error.password}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={inputChange("confirmPassword")}
            />
            {error.confirmPassword && <p className="text-danger">{error.confirmPassword}</p>}
        </div>
    
        <br />
        <div className="flex flex-row justify-content-between">
        <div className="text-left">
            <button className="btn btn-primary" onClick={()=>back()}>
                Back
            </button>
        </div>
    
        <div className="text-right">
            <button className="btn btn-primary" onClick={()=>next()}>
            Next
            </button>
        </div>
        </div>
      
        </div>
    );
    };
    export default SecondStep;