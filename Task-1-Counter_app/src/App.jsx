import { useState } from "react";
import "./App.css";
let App =()=>{
  let [counter, setCounter]=useState(0);

  let increase=()=>{
    counter=counter+1;
    setCounter(counter);
  }


  let decrease=()=>{
    counter=counter-1;
    setCounter(counter);
  }


  let reset=()=>{
  setCounter(0);
  }


  return (
    <center>
      <h1>Level 1: Beginner (Basic Concepts and Skills)</h1>
      <div className="container">
         <h1>Project:2 Counter Application</h1>
    <h2>{counter}</h2>
    <div className="buttons">
      <button className="increase" onClick={increase}>Increase</button>
    <button className="decrease" onClick={decrease}>Decrease</button>
    <button className="reset" onClick={reset}>Reset</button>
    </div>
      </div>
    </center>
  )
}

export default App;