import './App.css';

const x = 5;
const y = 10;
function App1(){
return(
    <div>
         <p> Below is an example of Ternary Condition. (App1.jsx)</p>
    <h1>{x>y?`The Number ${x} is Greater than ${y}`
    :`The Number ${x} is Smaller than ${y}`}</h1>
    </div>
);
}

export default App1;