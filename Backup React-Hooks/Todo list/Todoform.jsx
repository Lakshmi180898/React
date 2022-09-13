import React,{useState,useEffect} from 'react'
import Todolist from './TodoList'
const Todoform = () => {
  const data={username:'',line1:'',line2:'',City:'',State:''}
 
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
 
const deletehandler=(i)=>{
   const filteredTodo=todo.filter((f,m)=>m!==i)
   setTodo(filteredTodo)
 }
 
const edithandler=(editvalue)=>{
   const filteredTodo=todo.filter((f,index)=>index!==editvalue)
   setTodo(filteredTodo)
   const editSelector=todo.find((f,index)=>index===editvalue)
   Setinputvalues({
     username:editSelector.username,
     line1:editSelector.line1,
     line2:editSelector.line2,
     city:editSelector.city,
     state:editSelector.state
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
   
    if(!values.username){
      errors.username='Username is Required'
    }

    if(!values.line1){
      errors.line1='Line1 details is required'
    }
    else if(values.line1.length<10){
        errors.password='Line1 must have more than 10 charcters'
    }
    else if(values.line1.length>20){
        errors.password='line1 details cannot exceed more than 20 charcters'
      }


    if(!values.line2){
      errors.password='Line2 details is required'
    }
    else if(values.line2.length<10){
      errors.password='Line2 must have more than 10 charcters'
    }
    else if(values.line2.length>20){
      errors.password='line2 details cannot exceed more than 20 charcters'
    }

 return errors
  }
  return (
    <div className='container mt-5'>
      {Object.keys(formerrors).length===0 & issubmit ?(<div><h1> The data has been saved Successfully</h1></div>):(<pre>{JSON.stringify(inputvalues)}</pre>)}
     
     
     <div className='row'>
      <div className='col md-5'>
       <form onSubmit={submithandler}>
         
         <div className='form-group'>
         <label>Username</label>
         <input type='text' className='form-control' name='username' value={inputvalues.username} onChange={changehandler}/>
         </div>
          <p className='text-danger'>{formerrors.username}</p>

         <p> Enter the Address</p>
         
         <div className='form-group'>
         <label>Line1</label>
         <input type='text' className='form-control' name='line1' value={inputvalues.line1} onChange={changehandler}/>
         </div>
          <p className='text-danger'>{formerrors.line1}</p>
         
         <div className='form-group'>
         <label>Line2</label>
         <input type='text' className='form-control' name='line2' value={inputvalues.line2} onChange={changehandler}/>
         </div>
          <p className='text-danger'>{formerrors.line2}</p>
        
         <div className='form-group'>
         <label>City</label>
         <input type='text' className='form-control' name='city' value={inputvalues.city} onChange={changehandler}/>
         </div>
          <p className='text-danger'>{formerrors.city}</p>
         
          <div className='form-group'>
         <label>State</label>
         <input type='text' className='form-control' name='state' value={inputvalues.state} onChange={changehandler}/>
         </div>
          <p className='text-danger'>{formerrors.state}</p>
         
         <button className='btn btn-success'>Save</button>
       </form>
       <br/><br/>
     
     <Todolist todos={todo} deletehandler={deletehandler} edithandler={edithandler}/>
  </div>

     </div>

    </div>
  )
}

export default Todoform