import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from 'react';



function App() {

  const fetchData = () => {

  }

  const [catFact, setCatFact] = useState('');

  const fetchCatFact = () =>{
    Axios.get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact);
      });
  }


  useEffect(() =>{
    Axios.get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact);
      });
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <h1>RANDOM GENERATORS</h1>
        <p>Do you want to learn about cats?</p>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>

        <input placeholder="Ex. Pedro..."/>
        <button onClick={fetchData}>Predict Age</button>
        
        <h1>Predicted Age: </h1>
      </header>
    </div>
  );
}



export default App;

