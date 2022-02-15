
import React from 'react';
import ReactDOM from 'react-dom';

function Car() {
  return <h2>I am a Car!</h2>;
}
// Car() is one component.
function Garage() {
  return (
    <>
	    <h1>Who lives in my Garage?</h1>
	    <Car />
    </>
  );
 // Garage() is another component where Car() component is called, so it's components in components. 
 // That is merging of components without using 2 files for 2 components.
}

ReactDOM.render(<Garage />, document.getElementById('root'));
