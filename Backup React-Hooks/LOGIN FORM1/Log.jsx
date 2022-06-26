 import React, {useState} from 'react'

const Log = () => {
const [show, showData] = useState(false)  //if data is true it will be executed....
const[data,setData]=useState({
    username:'',
    password:''
  })

  const[todo, settodo] = useState([

  ])

  const evHandler= ((key)=>{
    //console.log(key.target.value);
    setData({...data,[key.target.name]:key.target.value})
  })

  const submitHandler= ((event)=>{ 
    event.preventDefault()
    console.log(data);
     const newTodo=[data,...todo];settodo(newTodo)
    showData(true)
  })
  
  
  return (
    <div>
      <center>
      <form onSubmit={submitHandler}>
        <input type='text' name="username" value={data.username} onChange={evHandler}/><br/>
        <input type='password' name="password" value={data.password} onChange={evHandler}/><br/>
        <input type='submit' name="submit"/>
      </form>
      </center>

      <table className='table table-hover'>
      <thead className='bg bg-dark text-white'>
        <th> USERNAME </th>
        <th> PASSWORD </th>
      </thead>
      <tbody>
        {
         show && todo.map((vr)=>{
            return <tr>
              <td>{vr.username}</td>
              <td>{vr.password}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div> 
  )
}

export default Log