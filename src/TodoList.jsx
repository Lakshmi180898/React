import React from 'react'
const Todolist = ({todos,deletehandler,edithandler}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Username</th>
                <th>Line1</th>
                <th>Line2</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
               {
                  todos.map((todos,index)=>{
                    return(
                      <tr key={index}>
                         <td>{index+1}</td>
                        <td>{todos.username}</td>
                        <td>{todos.line1}</td>
                        <td>{todos.line2}</td>
                        <td>{todos.city}</td>
                        <td>{todos.state}</td>
                     <td>
                     <input type='submit' value='delete' name='add' onClick={()=>deletehandler(index)}/> 
                     <input type='submit' value='edit' name='edit' onClick={()=>edithandler(index)}/>  
                     </td>
                    </tr>
                    )
                  })
                }
            
            </tbody>
          </table>

        </div>

      </div>

    </div>
  )
}

export default Todolist