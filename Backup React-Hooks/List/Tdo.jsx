import React,{useState,useEffect} from 'react'
import Todolist from './TList'
const Todoform = () => {
  const data={username:'',email:'',password:''}
 const [inputvalues,Setinputvalues] = useState(data)
 const[formerrors,setFormErrors]=useState({})
 const[issubmit,setIssubmit]=useState(false)
 const[todo,setTodo]=useState([])
 const changehandler=(e)=>{
Setinputvalues({...inputvalues,[e.target.name]:e.target.value})
 }
 const submithandler=(e)=>{
  e.preventDefault()
  console.log(inputvalues)
  setFormErrors(validate(inputvalues))
   setIssubmit(true)
   const newtodos=[...todo,inputvalues]
   setTodo(newtodos)
   Setinputvalues('[]')
 }
 const deletehandler=(indexvalue)=>{
   const filteredTodo=todo.filter((elem,index)=>index!==indexvalue)
   setTodo(filteredTodo)
 }
 const edithandler=(editindexvalue)=>{
   const filteredTodo=todo.filter((elem,index)=>index!==editindexvalue)
   setTodo(filteredTodo)
   const editSelector=todo.find((elem,index)=>index===editindexvalue)
   Setinputvalues({
     username:editSelector.username,
     email:editSelector.email,
     password:editSelector.password
   })
 }
  useEffect(()=>{
  console.log(formerrors)
    if(Object.keys(formerrors).length===0 & issubmit){
      console.log(inputvalues)
    }
  },[])
  const validate=(values)=>{
    const errors={}
    const usercheck=/^[a-z0-9]+\@[a-z]+\.[a-z]{2,6}$/
    if(!values.username){
      errors.username='username is Required'
    }
    if(!values.email){
      errors.email='Email is required'
    }
    else if(!usercheck.test(values.email)){
      errors.email='This is not valid email format'
    }
    if(!values.password){
      errors.password='Password is required'
    }
    else if(values.password.length<4){
      errors.password='Password must be more than 4 charcters'
    }
    else if(values.password.length>10){
      errors.password='Password cannot be exceed more than 10 charcters'
    }
 return errors
  }
  return (
    <div className='container mt-5'>
      {Object.keys(formerrors).length===0 & issubmit ?(<div><h1>Signed in Successfully</h1></div>):(<pre>{JSON.stringify(inputvalues)}</pre>)}
     
     
     <div className='row'>
      <div className='col md-5'>
       <form onSubmit={submithandler}>
        <div className='form-group'>
         <label>Username</label>
         <input type='text' className='form-control' name='username' value={inputvalues.username} onChange={changehandler}/>
         </div>
        <p className='text-danger'>{formerrors.username}</p>
         <div className='form-group'>
         <label>Email</label>
         <input type='text' className='form-control' name='email' value={inputvalues.email} onChange={changehandler}/>
         </div>
          <p className='text-danger'>{formerrors.email}</p>
         <div className='form-group'>
         <label>Password</label>
         <input type='text' className='form-control' name='password' value={inputvalues.password} onChange={changehandler}/>
         </div>
        <p className='text-danger'>{formerrors.password}</p>
         <button className='btn btn-success'>Submit</button>
       </form>
       <br/><br/>
     <Todolist todos={todo} deletehandler={deletehandler} edithandler={edithandler}/>
  </div>

     </div>

    </div>
  )
}

export default Todoform