//TO PRINT USER DATA IN JSON....DATA TO BE DIPALYED ON CHROME NOT IN CONSOLE..

import React from 'react'
import axios from 'axios'
class Put extends React.Component{
    state=
     { 
        user: []
    }
 getAxios= () =>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((rest) =>{
        console.log(rest.data)
        this.setState({user: rest.data})
    })
    .catch(console.error())
 }

 render()
 {
     return(
         <div>
             <pre>{JSON.stringify(this.state.user)}</pre>
             <button onClick= {this.getAxios}>Data</button>
         </div>
     )
 }
}

export default Put
