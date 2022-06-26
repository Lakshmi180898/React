import React, { Component } from 'react'
import Loggy from './Loggy';
/* import Home from './Home';
import Cart from './Cart';
import {CartProvider} from 'react-use-cart'; */
 
class App extends Component {
  render() {
    return (
      <div>
        <Loggy/>
      </div>

      /* <div>
        <CartProvider>
        <Home/>
         <Cart/> 
         </CartProvider>
      </div> */
    )
  }
}

export default App