import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Axxios = () => {
    const[state,setState]=useState([])
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.data)
      //.then(data=>console.log(data))
      .then(data=>setState(data))
    })
  return (
    <div>
        <pre>{JSON.stringify(state)}</pre>
        <table>
            <thead col-md-4>
                <th>Name</th>
                <th>E-mail</th>
                <th>Address</th>
            </thead>
            <tbody>
                {
                    
                        state.map((details)=>{
                            return(
                                <tr key={details.id}>
        
                                <td>{details.name}</td>
                                <td>{details.email}</td>
                                <td>{details.address.city}</td>
                                </tr>
                                )
                            })

                        }
            </tbody>


        </table>
    </div>
  )
}

export default Axxios