import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Axioss = () => {
    const[state,setState]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=>response.data)
        .then(data=>setState(data))
    })
  return (
    <div>
        <pre>{JSON.stringify(state)}</pre>
        {
            state.map((picture)=>{
                return(

                    <ul>
                        <li>{picture.albumId}</li>
                        <li>{picture.id}</li>
                        <li>{picture.title}</li>
                        <li>{picture.url}</li>
                        <li>{picture.thumbnailUrl}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Axioss