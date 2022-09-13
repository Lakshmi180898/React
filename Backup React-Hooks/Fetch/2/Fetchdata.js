import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Fetchdata = () => {
    const [state,setState]=useState([])//useState({users:[]})
    useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.data)
  //.then(data=>console.log(data))
  .then(data=>setState(data))//.then(data=>setState({user:data}))
    },[])
  return (
    <div>
{/* <pre>{JSON.stringify(state.users)}</pre>  */}
  <pre>{JSON.stringify(state)}</pre>
   {
    /* state.users.map((person)=>{ }) */
    state.map((person)=>{
        return(
            <ul key={person.id}>
                <li>{person.name}</li>
            </ul>
        )
    })
   }
    </div>
  )
}

export default Fetchdata