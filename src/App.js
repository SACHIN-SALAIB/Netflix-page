import Navbar from './Components/Navbar/Navbar';
import logo from './logo.svg';
import { originals,action,horror,romance } from './Url';
import React from 'react'
import Banner from './Components/Banner/Banner';
import './App.css';
import RowPost from './Components/RowPost/RowPost';
 

 

function App() {
  
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <RowPost  Url={originals} title="NETFLIX" /> 
       <RowPost Url={action}title="ACTION" isSmall />
       <RowPost  Url={horror} title="HORROR" /> 
       <RowPost Url={romance}title="ROMANCE" isSmall />
    </div>
  );
}

export default App;
