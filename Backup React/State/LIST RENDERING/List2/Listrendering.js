import React from 'react'
import Person from './Person'
class Listrendering extends React.Component{
   persons=[
        {id:1, name:"Gauthami", email:"gauthami0803@gmail.com", loc:"Banglore"},
        {id:2, name:"Lakshmi", email: "lakshmishree@145@gmail.com", loc:"Mumbai"},
    ];

render()
{
    return<div>
        
        <pre>{JSON.stringify(this.person)}</pre>
        {this.persons.map(person=>(
            <Person person={person}/>
        ))}

    </div>
}
}
export default Listrendering;