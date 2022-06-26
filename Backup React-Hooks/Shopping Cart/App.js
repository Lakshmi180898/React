import React, { Component } from 'react'
import Home from './Home';
import Cart from '../Backup React-Hooks/Shopping Cart/Cart';
import {CartProvider} from 'react-use-cart';
 
class App extends Component {
  render() {
    return (
      <div>
        <CartProvider>
        <Home/>
         <Cart/> 
         </CartProvider>
      </div>
    )
  }
}

export default App