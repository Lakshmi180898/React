import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Pracs = () => {
    const[state, setstate]=useState([])

    useEffect(()=>{
        axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    
        .then((response)=>{
            console.log(response.data)
            setstate(response.data)
        })
    
        .catch()
    })


  return (
    <div>
    <div className='container'>
        <pre>{JSON.stringify(state.user)}</pre>
        <div className="col-md-8">
            <div className='row'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((val)=>{
                                return <tr>
                                    <td>{val.name.first}</td>
                                    <td>{val.email}</td>
                                    <td>{val.city}</td>
                                    <td>{val.country}</td>
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

export default Pracs