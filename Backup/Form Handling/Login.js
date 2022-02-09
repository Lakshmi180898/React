import React from 'react'

class Login extends React.Component{
    
    state={
        email:" ",
        password:" ",
    }
     
    emailHandler= (event)=>{
        this.setState({email: event.target.value})
    }
    
    passwordHandler= (event)=>{
        this.setState({password: event.target.value})
    }
    
        
    render()
    {
        return<>
        <form>
            <label>E-mail ID</label>
              <input type="text" placeholder="Email Id" onChange={this.emailHandler}/>
            <br/><br/>

            <label>Password</label>
               <input type="password" placeholder="Password" onChange={this.passwordHandler}/>
            <br/><br/>

            <input type="submit" value="Login..."/>

        </form>
        
        </>
    }
}
export default Login;
