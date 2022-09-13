import React, { useEffect, useState } from 'react'

const Form = () => {
    const data={username:'',email:'',password:''}
    const [form,setForm]=useState(data)
    const [formerrors,setFormerrors]=useState({})
    const [isSubmit,setIssubmit]=useState(false)
    const changehandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const submithandler=(e)=>{
        e.preventDefault()
        setFormerrors(validate(form))
        setIssubmit(true)
        console.log(form)
    }
    useEffect(()=>{
        if(Object.keys(formerrors.length===0 && isSubmit)){
            console.log(formerrors)
        }
    },[])
    const validate=(values)=>{
        const errors={}
        const onlyStrings=/^[a-zA-Z]*$/
        const usercheck=/^[a-z0-9.]+\@[a-z]+\.[a-z]{2,6}$/
        if(!values.username){
            errors.username="username is required"
        }
        else if(!values.username.match(onlyStrings)){
    errors.username="enter only alpahabets"
        }
        if(!values.email){
            errors.email="email is required"
        }
        else if(!usercheck.test(values.email)){
            errors.email="this is not valid email format"
        }
        if(!values.password){
            errors.password="password is required"
        }
        else if(values.password.length<4){
            errors.password="password  must be more than 4 chracters"
        }
        else if(values.password.length>10){
            errors.password="password cannot  excedd more than 10 charters"
        }
        return errors
    }
  return (
    <div className='container mt-5'>
   <div className='row'>
<div className='col col-md-6'>
<form onSubmit={submithandler}>
    <label>username</label>
    <input type='text' name='username' value={form.username} onChange={changehandler}/><br/>
    <p style={{color:'red'}}>{formerrors.username}</p>
    <label>Email</label>
    <input type='text' name='email' value={form.email} onChange={changehandler}/><br/>
    <p style={{color:'red'}}>{formerrors.email}</p>
    <label>Password</label>
    <input type='text' name='password' value={form.password} onChange={changehandler}/><br/>
    <p style={{color:'red'}}>{formerrors.password}</p>
    <button >Submit</button>
</form>
</div>
   </div>
    </div>
  )
}

export default Form