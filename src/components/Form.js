import React,{useState} from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ConfirmPage from "./ConfirmPage";
import Success from "./Success";

const Form =()=>{
    
    const [values,setValues]=useState({
        step:1,
        firstName:'',
        lastName:'',
        age:'',
        email:'',
        phoneNumber:'',
        password:'',
        confirmPassword:''
    })
    const nextStep=()=>{
        setValues({
            ...values,
            step:values.step+1
        })
    }
    const prevStep=()=>{
        setValues({
            ...values,
            step:values.step-1
        })
    }
    const inputChange=(name)=>(e)=>{
        setValues({
            ...values,
            [name]:e.target.value
        })
    }
   const handleSubmit=(data)=>{
            console.log(data);
            setValues({
                ...values,
                step:values.step+1
            })
    }
    const { step} = values;
   return(
         <div className="form-container">
            {step===1 && <FirstStep values={values} inputChange={inputChange} nextStep={nextStep}/>}
            {step===2 && <SecondStep values={values} inputChange={inputChange} nextStep={nextStep} prevStep={prevStep}/>}
            {step===3 && <ConfirmPage values={values} inputChange={inputChange} nextStep={nextStep} prevStep={prevStep} submit={()=>handleSubmit(values)}/>}
            {step===4 && <Success/>}
        </div>
    )
   
}

export default Form;