import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Slider from './Components/Slider';
import Columns from './Components/Columns';
import Card from './Components/card';
import { useState } from 'react';


 
function App() {
  const [mode, setmode] = useState("light")
  const [textmode, settextmode] = useState("dark")

  const togglemode = ()=>{
    if (mode==="light"){
      setmode("dark");
      settextmode("light");
      document.body.style.backgroundColor = "#121212";
    }
    else{
      setmode("light");
      settextmode("dark");
      document.body.style.backgroundColor = "white";
    }

  }
  return (
    <>
    <Navbar mode={mode} togglemode={togglemode} />
    <Slider mode={mode} textmode={textmode} />
    <Columns mode={mode} textmode={textmode} className="my-3" />
    <Card mode={mode} textmode={textmode} />
    </> 
  );
}

export default App;