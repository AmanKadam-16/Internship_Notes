import React from 'react';
import './App.css'
import { Navigate, useNavigate } from 'react-router-dom';
function Home(){
    const navigate=useNavigate();

    function goToAbout(){
        navigate("/about")
    }

    function goToContact(){
        navigate("/contact")
    }

    
    return(
        <>
        <h1>This is Homepage.</h1>
        <button onClick={goToAbout}>About</button>
        <button onClick={goToContact}>Contact</button>
        </>

    );
}


export default Home;