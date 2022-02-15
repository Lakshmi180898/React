import React from 'react'

class ListRendering extends React.Component{

     names=["Lakshmi","Gauthami","Sinchana"];
     age=[23,18,13];
     
     
    
    
    render()
    {
        return(<>
        
        {this.Name.map(names => (<h1>{names}</h1>) )}
        
        
        {this.Age.map(age => (<h3>{age}</h3>) )}


        </>);

    }

}
export default ListRendering;