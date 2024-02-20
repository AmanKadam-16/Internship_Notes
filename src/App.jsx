import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Routes,Route } from 'react-router-dom';

function App(prop) {
  return (
    <>
<Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    
    <div>
      <p> Below is an example of Prop. (App.jsx)</p>
      <h1>
        Hi I'm {prop.name}
      </h1><hr />
    </div>
    </>

  );
}

export default App;
