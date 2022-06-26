import React, {useState} from 'react'

const Login= ()=>{
    const[data, setData]= useState({
        Username: '',
        Password: ''
     })
    // const intialstate={
    //      name:"",
    //      Password:""
    // }
    //  const [data,setData]=useState(intialstate)
    
    


const Handler=((val) =>{
       setData({...data,[val.target.name]:val.target.value})
})

const loginHandler = ((log)=>{
    log.preventDefault()
    console.log(data)
})

return (
        <div>
            <form onSubmit={loginHandler}>
                <input type= 'text' name="Username" value={data.Username} onChange={Handler} /> <br/>
                <input type= 'password' name="Password" value={data.Password} onChange={Handler} /> <br/>
                <input type= 'submit' onClick='login'/>
            </form>
        </div>
)

}
export default Login