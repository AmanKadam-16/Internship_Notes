import './App.css';
import { useState } from 'react';
function App2(){
    const[num,updNum]=useState(5);
    const[status,updStatus]=useState("Current");
    function updateState(){
        updNum(10);
        updStatus("Updated")
    }


return(
    <>
    <hr />
    <p>Below is simple example of useState (App2.jsx)</p>
    <h1>The {status} Number is {num}</h1>
    <button onClick={updateState}>Click Here</button>
    </>
);
}
export default App2;