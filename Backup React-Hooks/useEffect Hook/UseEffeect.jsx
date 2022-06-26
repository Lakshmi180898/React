import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
 const UseEffeect = () => {
 const [state,setstate]=useState({users:[]}
    
 )  
 useEffect(()=>{
 axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')

    .then((response) =>{
      console.log(response.data)
        setstate({users:response.data})
    })
    .catch()
 
 },[])
 
  return (
    <div>
          <h1>User Data</h1>
              <div className="container">
                  <pre>{JSON.stringify(state.user)}</pre>
                  <div className="row">
                      <div className="col-md-8">
                          <table className="table table-hover">
                              <thead className="bg-dark text-white">
                                  <tr>
                                      <th>Name</th>
                                      <th>Email</th>

                                      <th>City</th>
                                  </tr>
                              </thead>
                              <tbody>
                                {
                                  state.users.map((e,id)=>{
                                  return<tr  key={id} >
                                      <td>{e.name.last}</td>
                                      <td>{e.email}</td>
                                      <td>{e.location.country}</td>
                                      

                                    </tr>
                                  })
                                }
                              </tbody>
                          </table>
                      </div>
                      </div>
                      </div>
                      </div>
  )
}
export default UseEffeect