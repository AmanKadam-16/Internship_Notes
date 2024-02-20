import './App.css';
import { useState,useEffect } from 'react';
function App3(){
const[count,increment]=useState(1);
useEffect(()=>{
    console.log("Something Mounted")
},[])
function numCounter(){
    increment(count+1)

}
return (
<><hr />
<p>Below is an Example of counter using useState and Some useEffect (App3.jsx)</p>
<h1>The Current Number is {count}</h1>
<button onClick={numCounter}>Click</button>
</>
);
}
export default App3