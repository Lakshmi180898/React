import React, { useState } from 'react';
let BUTTON = () => {
    let [bttn,setBttn]=useState('HELLO')

    let gmHandler = ()=> {
        setBttn("GOOD MORNING")
    }

    let gnHandler = () =>{
        setBttn("GOOD NIGHT")
    }


return<div>
<h1>Message:{bttn}</h1>
<button className="btn btn-success" onClick={gmHandler}>Morning</button>
<button className="btn btn-danger" onClick={gnHandler}>Night</button>
</div>
}
export default BUTTON;


