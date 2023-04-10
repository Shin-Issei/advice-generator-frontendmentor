import { useEffect, useState } from 'react';
import './App.css';
import AdviceCard from './Components/adviceCard';

function App() {
  // The fetch to the API is to be done here as opposed to the components
  let [adviceData,assignData] = useState([]);
  useEffect(()=>{ // This will trigger a warning but each render is meant to be different
    async function fetchData(){
    await fetch("https://api.adviceslip.com/advice")
    .then(res=>{
      return res.json()
    })
    .then(res =>{
      assignData(res.slip)
    })
  }
  fetchData()
  },[])
  return (
    <div className="App">
      <AdviceCard adviceID={adviceData.id} adviceText={adviceData.advice}/>
    </div>
  );
}

export default App;
