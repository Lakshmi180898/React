import { useState } from 'react'

export const Logg = () => {
 const [data, setdata]=useState({
      userName:"",
      email:""
  })
// const [show,setshow]=(false)
    
  const changehandler=(e)=>{
       setdata({...data,[e.target.name]:e.target.value})
  }
  const [todo,settodo]=useState([])

  const submithanndler=(e)=>{
         e.preventDefault();
         console.log(data);
      const newtodo=[data,...todo];settodo(newtodo) 
         //setshow(true)

  }

    return (
    <div>Logg
        <form onSubmit={submithanndler}>
            <input type='text' onChange={changehandler} name='userName' placeholder="enter name" />
            <br></br>
            <br></br>
            <br></br>

            <input type='text' onChange={changehandler} name='email' placeholder="enter email" />
            <br></br>

            <br></br>
            <input type='submit'/>
        </form>
        <table className="table table-hover">
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>

            </thead>
            <tbody>
                {
             todo.map((d)=>{
                         return <tr>
                             <td>{d.userName}</td>
                             <td>{d.email}</td>

                         </tr>

                             })
                }
            </tbody>

        </table>
    </div>
  )
}
export default Logg