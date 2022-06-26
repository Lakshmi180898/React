import React from 'react'

class Ternary extends React.Component{
    constructor(props)
    {
        super(props)

        this.state={
            Login:true,
        }
    }

    render()
    {
        return this.state.Login?
        (<div> Welcome to Mumbai</div>):
        (<div> Welcome to Banglore </div>); 
    }

}
export default Ternary
