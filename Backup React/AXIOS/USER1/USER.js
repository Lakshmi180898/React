//TO PRINT USER DATA IN JSON.
import React, { Component } from 'react'
import Axios from 'axios';
class USER extends Component {
    getDataHandler = () =>  {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response);
            console.log(response.data)
        })
        .catch((err) => { })
}
render() {
    return <React.Fragment> 
        <pre>{JSON.stringify(this.getDataHandler)}</pre>
        <h1>User Data</h1>
        <button onClick={this.getDataHandler}>Get Data</button>
        </React.Fragment>
        
}
}
export default USER;