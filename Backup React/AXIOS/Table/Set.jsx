import axios from 'axios'
import React, { Component } from 'react'
export class Set extends Component {
   state={
     user: []
   }

   getSet= () =>{
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then((response)=>{
       console.log(response.data)
       this.setState({user:response.data})
     })
     .catch()
   }
  render() {
    return (
      <div>
      <div>Set</div>
      <button onClick={this.getSet} >Data</button>
      <pre>{JSON.stringify(this.state.user)}</pre>
      <table className='table table-hover'>
        <thead className='bg-dark text-white'>
          <tr>
            <th>user id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.user.map((res)=>{
             return <tr>
             <td>{res.id}</td>
             <td>{res.name}</td>
             <td>{res.email}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      </div>
      

    )
  }
}

export default Set

