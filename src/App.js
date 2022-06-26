import React from 'react'

const App = () => {
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <div>
            <input type="text" placeholder='Search.....' name="name"/>
            <button className='ml-3' > submit</button><br/>
            <div className='display-flex'>
              <input className='mt-4' type="checkbox"/>
              <p> Only show products in stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App