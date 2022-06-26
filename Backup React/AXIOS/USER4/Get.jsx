//TO PRINT THE PROGRAM IN CONSOLE...

import axios from 'axios'
import React, { Component } from 'react'
class Get extends Component {
    
    get_data=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=>{
                 console.log(response.data);
        })
        .catch()
    }
  render() {
    return (
      <div>
          <button onClick={this.get_data}>submit</button>
      </div>
    )
  }
}


export default Get