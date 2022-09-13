import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Fetch = () => {
    const [state,setState]=useState([])
    useEffect( async()=>{
        //axios

       /*  axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.data)
        //.then(data=>console.log(data))
        .then(data=>setState(data)) */

        //fetch

        /* fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        //.then(json=>console.log(json))
         .then(json=>setState(json)) */

         // axios with async and await
         
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        //console.log(response.data)
        setState(response.data)
    },[])
  return (
    <div>
<pre>{JSON.stringify(state)}</pre>
{
    state.map((item)=>{
        return(
            <ul>
                <li>{item.email}</li>
            </ul>
        )
    })
}
    </div>
  )
}

export default Fetch