import React from 'react'
import { useState } from 'react'


const Practise = () => {
const[v,setv]= useState({
  username:'',
  password:''
})
const [Jhope,setJhope]=useState([])
const eKookie=(ke)=>{
 setv({...v,[ke.target.name]:ke.target.value})
}
const submitRM=(suga)=>{
   suga.preventDefault();
   console.log(v);
   const Jimin=[v,...Jhope];setJhope(Jimin)
  }
  return (
    <div>
        <form onSubmit={submitRM}>
        <input type="text" name="username" onChange={eKookie}  />
        <input type="password" name="password" onChange={eKookie}/>
        <input type="submit" name="submit"/>
        </form>

        <table className="table table-hover">
          <thead className="bg-light text-dark">
          <tr> <th>USERNAME</th>
            <th>PASSWORD</th>
          </tr>
          </thead>
          <tbody>
            {
            Jhope.map((Jin) =>{
              return <tr>
              <td>{Jin.username}</td>
              <td>{Jin.password}</td>
              </tr>
            })
          }
          </tbody>
        </table>
    </div>
    
  )
}

export default Practise
