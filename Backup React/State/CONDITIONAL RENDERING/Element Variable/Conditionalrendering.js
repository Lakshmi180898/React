import React,{Component} from 'react'
class Conditionalrendering extends Component{
    constructor(props){
    super(props);

        this.state={
            Login:false,
        }
    } 
    

    render()
    {
        let message; //this is a variable.
        if(this.state.Login)
        {
            message= <div>WELCOME TO MUMBAI</div>
        }
        else
        {
            message= <div>Welcome to Banglore</div>
        }

        return<>

        {message}

         </>

    }
}
export default Conditionalrendering;
