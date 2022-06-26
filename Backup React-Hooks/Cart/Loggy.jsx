import React from 'react'
import { useState } from 'react'

const Loggy = () => {
    const[a,seta]= useState({
        username:" ",
        password:" "
    })

const luckyHandler= (m)=>{
         seta({...a,[m.target.name]:m.target.value})
}


const[todo,settodo]=useState([])



const sHandler= (r)=>{
      r.preventDefault();
      console.log(a);
      const newval=[a,...todo];settodo(newval)
}
/* 
      const deleteHandler=(n)=>{
          const filterTodo=todo.filter((l)=>{
            l!==n
            settodo(filterTodo)
          })
      } */

  return (

    <div>
        <center>
        <form onSubmit={sHandler}>            
        <input type="text" onChange={luckyHandler} name="username" placeholder='Enter your name.'/> <br/><br/>
        <input type="password" onChange={luckyHandler} name="password" placeholder='Enter the password'/><br/><br/>
        <input type="submit"/>
        </form>
        </center>

        <table className='table table-hover'>
            <thead className='bg bg-light text-dark'>
                 <tr>
                     <th>USERNAME</th>
                     <th>PASSWORD</th>
                 </tr>
            </thead>
            <tbody>
               {
                   todo.map((h)=>{
                     return <tr>
                             <td>{h.username}</td>
                             <td>{h.password}</td>
                         </tr>
                     
                   })
               }
            </tbody>
        </table>

    </div>
  )
}

export default Loggy


