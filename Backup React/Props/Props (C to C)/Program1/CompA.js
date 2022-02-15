import CompB from "./CompB";
import React from "react";
class CompA extends React.Component{
     name="GAUTHAMI"
     age=50
     email="gauthami0803@gmail.com"
    
    
    render()
    {return <>

    <CompB   name={this.name}
             age={this.age}
             email={this.email}/>
    </>}
} 
export default CompA;