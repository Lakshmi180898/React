import React from 'react'

class ShortCircuit extends React.Component{
constructor(props)
{
    super(props)
    {
        this.state={
            Login:true,
        }
    }
}
render()
{
    return this.state.Login && <div> Welcome to Banglore</div>
}

}
export default ShortCircuit;