import React from 'react'

class Condition extends React.Component{
    constructor(props)
    {
        super(props)
          this.state={

          Login:false 

        }
    }
render()
{
    if(this.state.Login){
        return <> Hello GM. </>
    }
    else{
        return <> GN Sweet Dreams. </>
    }
}

}
export default Condition;
