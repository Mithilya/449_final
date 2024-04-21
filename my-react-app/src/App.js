import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from 'react';



function App() {

  const [catFact, setCatFact] = useState('');
  const [dogFact, setDogFact] = useState('');

  const fetchCatFact = () =>{
    Axios.get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact);
      });
  }

  const fetchDogFact = () => {
    Axios.get('https://dog-api.kinduff.com/api/facts')
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * res.data.facts.length);
        const randomFact = res.data.facts[randomIndex];
        setDogFact(randomFact);
      })
  }


  useEffect(() =>{
    Axios.get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact);
      });
  },[]);

  useEffect(() =>{
    Axios.get('https://dog-api.kinduff.com/api/facts')
      .then((res) => {
        setDogFact(res.data.fact);
      });
  },[]);



  return (
    <div className="App">
      <header className="App-header">

        <h1 className="text-3xl font-bold mb-4">Pet Facts Generator</h1>
        <h2>do you have a pet, well it doesn't matter, learn about cats and dogs now by 
          generating facts. 
        </h2>

        <p>Do you want to learn about cats? Generate facts.</p>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>

        <p>Do you want to learn about dogs? Generate facts.</p>
        <button onClick={fetchDogFact}>Generate Dog Fact</button>
        <p>{dogFact}</p>

      </header>
    </div>
  );
}



export default App;

