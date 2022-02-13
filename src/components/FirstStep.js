import React, {useState} from "react";
//mutli step form using tailwind
const FirstStep = ({values, inputChange, nextStep})=>{
    const [error, setError] = useState({});

    const validate=(values)=>{
        let errors = {}
    
        if (!values.firstName) 
            errors.firstName = 'first name is required';
        if (!values.lastName) 
            errors.lastName = 'last name is invalid';
        if (!values.age) 
            errors.age = 'age is required';
          
          return errors;
        }
        
    const next= ()=>{
        const errors = validate(values);
        setError(errors);
        if(Object.keys(errors).length === 0){
            nextStep();
        }
    }

    return(
        <div className="form-container">
        <h1 className="mb-5">Account Setup</h1>
        
        <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input type="text" className="form-control" name="firstName" value={values.firstName} onChange={inputChange('firstName')}/>
            {error.firstName && <p className="text-danger">{error.firstName}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="email">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={values.lastName} onChange={inputChange('lastName')}/>
            {error.lastName && <p className="text-danger">{error.lastName}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" name="age" value={values.age} onChange={inputChange('age')}/>
            {error.age && <p className="text-danger">{error.age}</p>}
        </div>
        

        <br />

        <div className="text-right">
            <button className="btn btn-primary" onClick={()=>next()}>Next</button>
        </div>
    </div>
    )
}

export default FirstStep;